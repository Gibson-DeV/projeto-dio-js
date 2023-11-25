
// Object
const pokerApi = {}

function convertPokerApiDetailsToPokemon (pokemonDetails){
    const pokemon = new Pokemon();
    pokemon.id = pokemonDetails.id;
    pokemon.name = pokemonDetails.name;
    pokemon.types = pokemonDetails.types.map((typeSlot) => typeSlot.type.name);
    pokemon.photo = pokemonDetails.sprites.other.dream_world.front_default;
    
    return pokemon
}

pokerApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
            .then((responsePokemonUrl) => responsePokemonUrl.json())
            .then(convertPokerApiDetailsToPokemon)
}


/*  Method object "pokerApi" for consume API.
    Get pokemon list (results).
*/ 
pokerApi.getPokemons = (offset = 0, limit = 20) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((json) => json.results)
        .then((jsonResults) => jsonResults.map(pokerApi.getPokemonsDetails))
        .then((pokemonDetailsJson) => Promise.all(pokemonDetailsJson))
        .catch(console.error);
};



 

