<?php

namespace Monaye\NovaGenericOauth;

use Laravel\Nova\ResourceTool;
use Monaye\NovaGenericOauth\ToolServiceProvider;
// use League\OAuth2\Client\Provider\GenericProvider;

class NovaGenericOauth extends ResourceTool
{

    public function __construct(String $slug)
    {
        parent::__construct();

        $provider = new \League\OAuth2\Client\Provider\GenericProvider([
            'clientId'                =>  config(ToolServiceProvider::$slug . '.' . $slug . '.clientId'),    // The client ID assigned to you by the provider
            'clientSecret'            =>  config(ToolServiceProvider::$slug . '.' . $slug . '.clientSecret'),    // The client password assigned to you by the provider
            'urlAuthorize'            => config(ToolServiceProvider::$slug . '.' . $slug . '.urlAuthorize'),
            'urlAccessToken'          => config(ToolServiceProvider::$slug . '.' . $slug . '.urlAccessToken'),
            'urlResourceOwnerDetails' => config(ToolServiceProvider::$slug . '.' . $slug . '.urlResourceOwnerDetails'),
            'redirectUri' => config(ToolServiceProvider::$slug . '.' . $slug . '.redirectUri')
        ]);

        $this->withMeta([
            'oath_results' => auth()->user()->currentTeam->settings['oath'] ? auth()->user()->currentTeam->settings['oath'][$slug] : null,
            'web_oath_url' => $provider->getAuthorizationUrl(),
        ]);
    }

    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Nova Generic Oauth';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'nova-generic-oauth';
    }
}
