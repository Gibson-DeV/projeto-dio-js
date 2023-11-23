
// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
let x = 0;
function convertPokemonToListHtml(pokemon) {
    x += 1;
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="details">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>
        <img class="imgPokemon" src="./assets/img/Bulbasauro.webp?v=${x}" alt="${pokemon.name}">
    </li> `
}

//get content ol id
const oLpokemons = document.getElementById('oLpokemons');

/* Continuation of the method "getPokemons".
Receive a list of pokemon */
pokerApi.getPokemons().then((pokemonList = []) => {

    //Receive pokemons list (li) as html
    const newList = pokemonList.map((pokemon) => convertPokemonToListHtml(pokemon));
    
    const div = document.createElement('div');

    const newHtml = newList.join('');
    
    div.innerHTML = newHtml;

    [...div.children].forEach((element) => {
        oLpokemons.append(element)
    });
})





