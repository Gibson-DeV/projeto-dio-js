
var offset = 0;
const limit = 5;

function convertPokemonToHtmlLi(pokemon){
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
const oLpokemons = document.getElementById('oLpokemons');
const loadMoreButton = document.getElementById('loadMoreButton');

loadMoreButton.addEventListener('click', () => {
    offset += limit;  
     if(offset === 15){
        loadPokemon(offset, limit);
        const maxOffset = 20;
        const maxLimit = 1
        loadPokemon(maxOffset,maxLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
        
     }else{
        loadPokemon(offset, limit);
     }
});

pokerApi.getPokemonsApi()
    .then((pokemonList = []) => pokemonList.map(convertPokemonToHtmlLi))
    .then((pokemonLi) => {
        const newList = pokemonLi;
        newList.join(' ');
        const newHtml = newList
        const div = document.createElement('div');
        div.innerHTML = newHtml;
        [...div.children].forEach((li) => oLpokemons.append(li));
    })

function loadPokemon (offset, limit){
    pokerApi.getPokemonsApi(offset, limit)
    // .then((pokemons = []) => pokemons.map((pokemon) => convertPokemonToHtmlLi(pokemon)))
    .then((pokemons = []) => pokemons.map(convertPokemonToHtmlLi))
    .then((pokemonsLi) => {
        const newListLi = pokemonsLi;
        const newHtmlLi = newListLi.join('');
        const div = document.createElement('div');
        div.innerHTML = newHtmlLi;
        [... div.children].forEach((item) => oLpokemons.append(item));
    })

}





