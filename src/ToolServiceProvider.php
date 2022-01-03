<?php

namespace Monaye\NovaGenericOauth;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class ToolServiceProvider extends ServiceProvider
{

    public static $slug = 'nova-generic-oauth';
    public static $path = 'nova_generic_oauth';

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->booted(function () {
            $this->routes();
        });

        $this->loadViewsFrom(__DIR__ . '/../resources/views', self::$path);

        $this->publishes([
            __DIR__ . '/../config/' . self::$slug . '.php' => config_path(self::$slug . '.php'),
            __DIR__ . '/../resources/views' => resource_path('views/vendor/' . self::$path),
        ]);

        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-generic-oauth', __DIR__ . '/../dist/js/tool.js');
            Nova::style('nova-generic-oauth', __DIR__ . '/../dist/css/tool.css');
        });
    }

    /**
     * Register the tool's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova'])
            ->prefix('nova-vendor/' . self::$slug)
            ->group(__DIR__ . '/../routes/api.php');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->mergeConfigFrom(
            __DIR__ . '/../config/' . self::$slug . '.php',
            self::$slug
        );
    }
}
