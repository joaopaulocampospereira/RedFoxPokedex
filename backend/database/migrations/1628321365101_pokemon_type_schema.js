'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonTypeSchema extends Schema {
  up () {
    this.create('pokemon_type', (table) => {
      table.increments()
      table.integer('pokemon_id').unsigned().references('pokemon.id').onDelete('RESTRICT')
      table.integer('type_id').unsigned().references('type.id').onDelete('RESTRICT')
      table.timestamps()
    })
  }

  down () {
    this.drop('pokemon_types')
  }
}

module.exports = PokemonTypeSchema
