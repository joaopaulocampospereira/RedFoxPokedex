'use strict'

const Pokemon = use('App/Models/Pokemon')
const Type = use('App/Models/Type')
const Weather = use('App/Models/Weather')

class PokemonController {
    async index({request, response}){
      const pokemon = await Pokemon.query()
        .with("type")
        .with("weather")
        .fetch()

      return response.json(pokemon)
    }

    async getPokemon({request, response}){
      const data = request.all()

      if(data["search"]){
        const pokemon = await Pokemon.
        query()
          .with("type")
          .with("weather")
          .where('name', 'like', "%"+data["search"]+"%")
          // .where('generation', '=', data["generation"])
          .fetch()

        return response.json(pokemon)
      }else{

        const pokemon = await Pokemon.
        query()
          .with("type")
          .with("weather")
          .whereHas("type", (builder) => {
            if(data["type"]){
              builder.where('name', data["type"])
            }
          })
          .whereHas("weather", (builder) => {
            if(data["weather"]) {
              builder.where('name', data["weather"])
            }
          })
          .fetch()

          return response.json(pokemon)
      }




    }

    async getWeatherPokemon({request, response}){
      const weather = await Weather.all()

      return response.json(weather)
    }

    async getTypePokemon({request, response}){
      const type = await Type.all()

      return response.json(type)
    }

    async import({request, response}) {
      const data = request.all()['data'];

      for (const item of data) {

        try {

          const pokemon = await Pokemon.create({
            "name": item["Name"],
            "pokedex_number": item["Pokedex Number"],
            "img_name": item["Img name"],
            "generation": item["Generation"],
            "evolution_stage": item["Evolution Stage"],
            "evolved": item["Evolved"],
            "familyID": item["FamilyID"],
            "cross_gen": item["Cross Gen"],
            "stat_total": item["STAT TOTAL"],
            "atk": item["ATK"],
            "def": item["DEF"],
            "sta": item["STA"],
            "legendary": item["Legendary"],
            "aquireable": item["Aquireable"],
            "spawns": item["Spawns"],
            "regional": item["Regional"],
            "raidable": item["Raidable"],
            "ratchable": item["Hatchable"],
            "shiny": item["Shiny"],
            "nest": item["Nest"],
            "new": item["New"],
            "not-gettable": item["Not-Gettable"],
            "future-evolve": item["Future Evolve"],
            "100%cp@_40": item["100% CP @ 40"],
            "100%cp@_39": item["100% CP @ 39"],
          })


          if (item['Type 1']) {
            const type = await Type.findOrCreate({name: item['Type 1']})
            await pokemon.type().attach(type.id)
            pokemon.load('type')
            // type.pokemon().associate(pokemon)

          }
          if (item['Type 2']) {
            const type = await Type.findOrCreate({name: item['Type 2']})
            await pokemon.type().attach(type.id)
            pokemon.load('type')
            // type.pokemon().associate(pokemon)
          }

          if (item['Weather 1']) {
            const weather = await Weather.findOrCreate({name: item['Weather 1']})
            await pokemon.weather().attach(weather.id)
            pokemon.load('weather')
            // weather.pokemon().associate(pokemon)
          }
          if (item['Weather 2']) {
            const weather = await Weather.findOrCreate({name: item['Weather 2']})
            await pokemon.weather().attach(weather.id)
            pokemon.load('weather')
            // weather.pokemon().associate(pokemon)
          }

        }catch (e) {

        }
      }
      return response.json({"message": "Pokemons importados"})

    }

    async insertWeather({request, response}){
      var data = request.all()
      var pokemon = await Pokemon.find(data["pokemon"])
      var weather = await Weather.find(data["weather"])

      await pokemon.weather().attach(weather)
      await pokemon.load('type')

      return response.json(pokemon)
    }

}

module.exports = PokemonController
