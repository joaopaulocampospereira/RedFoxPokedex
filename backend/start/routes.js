'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/','PokemonController.index')
Route.post('/import','PokemonController.import')
Route.get('/search', 'PokemonController.getPokemon')
Route.get('/weather', 'PokemonController.getWeatherPokemon')
Route.get('/type', 'PokemonController.getTypePokemon')
