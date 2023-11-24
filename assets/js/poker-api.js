
// OBJETO
const pokerApi = {}

pokerApi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
            .then((responsePokemonUrl) => responsePokemonUrl.json())
}

//Consumo da API, converte em JSON e retorna o atributo results.  
pokerApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => responseJson.results)
        .then((pokemonsList) => pokemonsList.map(pokerApi.getPokemonsDetails))
        .then((pokemonDetailsJson) => Promise.all(pokemonDetailsJson))
        .then((pokemonDetails) => pokemonDetails)
        .catch(console.error);
};
