


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

const oLpokemons = document.getElementById('oLpokemon');

pokerApi.getPokemonsApi()
    .then((pokemonList = []) => pokemonList.map((pokemon) => convertPokemonToHtmlLi(pokemon)))
    .then((pokemonLi) => {
        const newList = pokemonLi;
        newList.join(' ');
        const newHtml = newList
        const div = document.createElement('div');
        div.innerHTML = newHtml;
        [...div.children].forEach((li) => oLpokemons.append(li));
        
        
    })





