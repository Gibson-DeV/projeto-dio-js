
const pokerApi = {}

function createPokemon (pokemons) {
    const pokemon = new Pokemon();
    pokemon.id = pokemons.id
    pokemon.name = pokemons.name
    pokemon.types = pokemons.types.map((typeSlot) => typeSlot.type.name)
    pokemon.photo = pokemons.sprites.other.dream_world.front_default  
    
    return pokemon
}

pokerApi.getPokemonsDetails = (pokemons) => {
    const url = pokemons.url
    
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => createPokemon(responseJson))  
}

pokerApi.getPokemonsApi = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;   

    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => responseJson.results)
    .then((responseResults) => responseResults.map((pokemon) => pokerApi.getPokemonsDetails(pokemon)))
    .then((responsePokemon) => Promise.all(responsePokemon))
    // .then(console.error)
}

 

