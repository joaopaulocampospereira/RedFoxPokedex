'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonWeatherSchema extends Schema {
  up () {
    this.create('pokemon_weather', (table) => {
      table.increments()
      table.integer('pokemon_id').unsigned().references('pokemon.id').onDelete('RESTRICT')
      table.integer('weather_id').unsigned().references('weather.id').onDelete('RESTRICT')
      table.timestamps()
    })
  }

  down () {
    this.drop('pokemon_weathers')
  }
}

module.exports = PokemonWeatherSchema
