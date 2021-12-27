<?php

namespace Monaye\NovaGenericOauth;

use Laravel\Nova\ResourceTool;

class NovaGenericOauth extends ResourceTool
{
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
