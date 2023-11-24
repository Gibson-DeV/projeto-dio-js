
// Object
const pokerApi = {}

pokerApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
            .then((responsePokemonUrl) => responsePokemonUrl.json())
}

/*  Method object "pokerApi" for consume API.
    Get pokemon list (results).
*/  
pokerApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => responseJson.results)
        .then((pokemonsList) => pokemonsList.map(pokerApi.getPokemonsDetails))
        .then((pokemonDetailsJson) => Promise.all(pokemonDetailsJson))
        .catch(console.error);
};
