'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonSchema extends Schema {
  up () {
    this.create('pokemon', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.integer('pokedex_number')
      table.string('img_name')
      table.integer('generation')
      table.string('evolution_stage')
      table.boolean('evolved')
      table.integer('familyID')
      table.boolean('cross_gen')
      table.integer('stat_total')
      table.integer('atk')
      table.integer('def')
      table.integer('sta')
      table.boolean('legendary')
      table.boolean('aquireable')
      table.boolean('spawns')
      table.boolean('regional')
      table.boolean('raidable')
      table.integer('ratchable')
      table.boolean('shiny')
      table.boolean('nest')
      table.boolean('new')
      table.boolean('not-gettable')
      table.boolean('future-evolve')
      table.integer('100%cp@_40')
      table.integer('100%cp@_39')
      table.timestamps()
    })
  }

  down () {
    this.drop('pokemon')
  }
}

module.exports = PokemonSchema
