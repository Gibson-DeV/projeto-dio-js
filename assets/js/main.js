
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="details">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
        <img class="imgPokemon" src="./assets/img/Bulbasauro.webp" alt="${pokemon.name}">
    </li>
    `

}

const oLpokemons = document.getElementById('oLpokemons');

fetch(url)
    .then((response) => response.json())
    .then((responseJson) => responseJson.results)
    .then((pokemonList) => {
        for (let pokemon of pokemonList){
            oLpokemons.innerHTML += convertPokemonToHtml(pokemon)
        }})
    .catch((error) => console.error(error))
    .finally(() => console.log('Requisição completa!'));





