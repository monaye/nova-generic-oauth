<?php

namespace Monaye\NovaGenericOauth\Controllers;

use Illuminate\Http\Request;
use App\Services\Freee\Client;
use Monaye\NovaGenericOauth\ToolServiceProvider;
use League\OAuth2\Client\Provider\GenericProvider;


class OathApiController
{

    public function handleApiCallBack(Request $request)
    {

        $provider = new GenericProvider([
            'clientId'                =>  config(ToolServiceProvider::$slug . '.' . $request->slug . '.clientId'),    // The client ID assigned to you by the provider
            'clientSecret'            =>  config(ToolServiceProvider::$slug . '.' . $request->slug . '.clientSecret'),    // The client password assigned to you by the provider
            'urlAuthorize'            => config(ToolServiceProvider::$slug . '.' . $request->slug . '.urlAuthorize'),
            'urlAccessToken'          => config(ToolServiceProvider::$slug . '.' . $request->slug . '.urlAccessToken'),
            'urlResourceOwnerDetails' => config(ToolServiceProvider::$slug . '.' . $request->slug . '.urlResourceOwnerDetails'),
            'redirectUri' => config(ToolServiceProvider::$slug . '.' . $request->slug . '.redirectUri')
        ]);


        $accessToken = $provider->getAccessToken('authorization_code', [
            'code' => $request->code
        ]);

        $team = $request->user()->currentTeam;
        $team->setFreeeOauthTokenInfo($request->slug, $accessToken);
        $team->save();

        $freeeClient = new Client();
        $companies = $freeeClient->getCompanies();


        return package_view(ToolServiceProvider::$path, 'oauth_successful', [
            'teamId' => $team->id,
            'slug' => $request->slug,
            'companies' => $companies,
        ]);
    }
}
