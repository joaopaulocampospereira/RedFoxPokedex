'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pokemon extends Model {
  type (){
    return this.belongsToMany('App/Models/Type')
  }

  weather (){
    return this.belongsToMany('App/Models/Weather')
  }
}

module.exports = Pokemon
