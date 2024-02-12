function getNumberQueryParam() {
    const numeroStr = new URLSearchParams(window.location.search).get('number');
    return parseInt(numeroStr, 10);
}

function getPokemon(id){
    pokeApi.getPokemonDetailByID(id)
        .then((pokemon) => {
            const newHtml = renderPokemon(pokemon)
            const pokemonInfoHTML = document.getElementById("pokemonInfo")
            pokemonInfoHTML.innerHTML = newHtml
        })
}
const pokemonID = getNumberQueryParam()
getPokemon(pokemonID)


function renderPokemon(pokemon){
    return ` 
        <section class="content">
            <div class="detalhePokemons ${pokemon.types[0]}">
                <div class="header">
                    <div class="leftHeader">
                        <span class="name">${pokemon.name}</span>
                        <div class="types">
                            ${pokemon.types.map((type) => `<div class="type ${type}">${type}</div>`).join('')}
                        </div>
                    </div>
                    <div>
                        <span class="number">#${pokemon.number}</span>
                    </div>
                </div>
                <div class="pokemonImg">
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </div>
            <div class="table-container">
                <ol class="definicaoPokemon">
                    <li><strong>About</strong></li>
                    <hr>
                    <li>Weight <strong>${pokemon.weight / 10} kg</strong></li>
                    <li>Height <strong>${pokemon.height / 10} m</strong></li>
                    <li>Ablities <strong>${pokemon.abilities.join(', ')}</strong></li>
                </ol>
            </div>
            <div>
                <button class="back-button" onclick="window.location.href = 'index.html';">Back</button>
            </div>
        </section>
     `
}

