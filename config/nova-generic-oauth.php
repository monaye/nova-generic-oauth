<?php

use Monaye\NovaGenericOauth\ToolServiceProvider;


return [
    'FREEE' => [
        'clientId' => env('FREEE_CLIENT_ID'),
        'clientSecret' => env('FREEE_CLIENT_SECRET'),
        'urlAuthorize' => env('FREEE_URL_AUTHORISE'),
        'urlAccessToken' => env('FREEE_URL_ACCESS_TOKEN'),
        'urlResourceOwnerDetails' => env('FREEE_URL_RESOURCE_OWNER_DETAILS'),
        'redirectUri'             => env('APP_URL') . '/nova-vendor/' . ToolServiceProvider::$slug . '/handleCallBack/freee',
    ]
];
