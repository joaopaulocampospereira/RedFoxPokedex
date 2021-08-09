'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Weather extends Model {
  pokemon (){
    return this.belongsToMany('App/Models/Pokemon')
  }
}

module.exports = Weather
