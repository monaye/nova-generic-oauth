<?php

namespace Monaye\NovaGenericOauth\Controllers;

use Illuminate\Http\Request;
use Monaye\NovaGenericOauth\ToolServiceProvider;
use League\OAuth2\Client\Provider\GenericProvider;

class OathApiController
{

    public function handleApiCallBack(Request $request)
    {


        $provider = new GenericProvider([
            'clientId'                =>  config('freee-oath.' . $request->slug . '.clientId'),    // The client ID assigned to you by the provider
            'clientSecret'            =>  config('freee-oath.' . $request->slug . '.clientSecret'),    // The client password assigned to you by the provider
            'urlAuthorize'            => config('freee-oath.' . $request->slug . '.urlAuthorize'),
            'urlAccessToken'          => config('freee-oath.' . $request->slug . '.urlAccessToken'),
            'urlResourceOwnerDetails'          => config('freee-oath.' . $request->slug . '.urlResourceOwnerDetails'),
            'redirectUri' => config('freee-oath.' . $request->slug . '.redirectUri')
        ]);


        $accessToken = $provider->getAccessToken('authorization_code', [
            'code' => $request->code
        ]);

        $team = $request->user()->currentTeam;

        $team->settings = $team->settings ?? [];
        $team->settings['oath'] = $team->settings['oath'] ?? [];
        $team->settings['oath'][$request->slug] = $team->settings['oath'][$request->slug] ?? [];

        $team->settings['oath'][$request->slug]['access_token'] = $accessToken->getToken();
        $team->settings['oath'][$request->slug]['refresh_token'] = $accessToken->getRefreshToken();
        $team->settings['oath'][$request->slug]['expires_in'] = $accessToken->getExpires();

        $team->save();

        return package_view(ToolServiceProvider::$path, 'oath_successful', [
            'slug' => $request->slug
        ]);
    }
}
