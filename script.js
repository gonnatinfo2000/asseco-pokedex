"use strict";

const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon?limit=150";

const pokemons = document.querySelector(".pokemonList");

const getPokemon = function () {
  const req = new XMLHttpRequest();
  req.open("GET", pokemonListUrl);
  req.send();

  req.addEventListener("load", function () {
    const pkmnData = JSON.parse(this.responseText);
    const pkmns = pkmnData.results;
    console.log(pkmns);

    pkmns.forEach((pkmn, i) => {
      i += 1;

      const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

      const html = `
            <div class="pkmn">
              <h3>${pkmn.name}</h3> 
              <img src="${sprite}">
            </div>
        `;

      pokemons.insertAdjacentHTML("beforeend", html);
    });
  });
};

getPokemon();
