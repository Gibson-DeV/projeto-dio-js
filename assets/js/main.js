
function convertPokemonToListHtml(pokemon) {
    
    return `
    <li class="pokemon ${pokemon.types[0]} ">
        <span class="number">#${pokemon.id.toString().padStart(3,0)}</span>
        <span class="name">${pokemon.name}</span>

        <div class="details">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class"types ${type}"> ${type}</li>`).join(' ')}
            </ol>
        <img class="imgPokemon" src="${pokemon.photo}">
    </li> `
}

//get ol for id.
const oLpokemons = document.getElementById('oLpokemons');

/* Continuation of the method "getPokemons".
Receive a list of pokemon */
pokerApi.getPokemons().then((pokemonList = []) => {

    //Receive pokemons list (li) as html
    const newList = pokemonList.map((pokemon) => convertPokemonToListHtml(pokemon));

    // Create div
    const div = document.createElement('div');
    
    // Convert pokemon list to string
    const newHtml = newList.join('');

    // puts the converted string (html) inside the div
    div.innerHTML = newHtml;

    // take each child of the div and add it to oLpokemons.
    [...div.children].forEach((li) => {
        oLpokemons.append(li)
    });
})





