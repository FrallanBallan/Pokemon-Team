const PokedexData = [
  {
    name: "bulbasaur",
    height: 7,
    weight: 69,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    height: 6,
    weight: 85,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "pikachu",
    height: 4,
    weight: 60,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mewtwo",
    height: 20,
    weight: 1220,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
  },
  {
    name: "magikarp",
    height: 9,
    weight: 100,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
  },
  {
    name: "jigglypuff",
    height: 5,
    weight: 55,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    name: "squirtle",
    height: 5,
    weight: 90,
    type: "water",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "jolteon",
    height: 8,
    weight: 245,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
  },
  {
    name: "electabuzz",
    height: 11,
    weight: 300,
    type: "electric",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
  },
  {
    name: "moltres",
    height: 20,
    weight: 600,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
  },
  {
    name: "growlithe",
    height: 7,
    weight: 190,
    type: "fire",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
  },
  {
    name: "oddish",
    height: 5,
    weight: 54,
    type: "grass",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
  },
  {
    name: "rattata",
    height: 3,
    weight: 35,
    type: "normal",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  },
  {
    name: "hypno",
    height: 16,
    weight: 756,
    type: "psychic",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
  },
];

// Uppgift - Pokedex application

// GIT-Flöde
//  OBS! Mobbprogrammering (1 person skriver, 2 personer tänker).

// Skapa ett repo och bjud in samtliga medlemmar.

// Samtliga personer skapar en egen branch.

// Personen som skriver kodar i sin branch. När ni ska rotera person, commit+push samtliga ändringar till sin branch. Merga in samtliga ändringar till main/master.

// Nästa person som skriver, drar ner de senaste ändringarna från main/master till sin branch och forsätter koda.

// UPPGIFTBESKRIVNING

// Visa ut samtliga pokemon och deras data på sidan.

let pokemonUl = document.querySelector("#pokemonUl");

PokedexData.forEach((pokemon) => {
  let pokemonLi = document.createElement("li");
  let pokemonImg = document.createElement("img");
  pokemonImg.setAttribute("src", pokemon.url);
  pokemonLi.innerText = `
  Name: ${pokemon.name}
  Height: ${pokemon.height}
  Weight: ${pokemon.weight}
  Type: ${pokemon.type}
  `;
  pokemonLi.append(pokemonImg);
  pokemonUl.append(pokemonLi);
});

// Skapa funktionalitet för att kunna filtrera pokemon baserat på deras typ (checkboxar).
let typeCheckboxes = document.querySelectorAll("[name='type']");

typeCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    pokemonUl.innerHTML = "";
    constructPokemonList(filterByType());
  });
});

const filterByType = () => {
  let checkedTypes = document.querySelectorAll("[name='type']:checked");
  let filteredTypes = PokedexData.filter((pokemon) => {
    let typeMatches = false;
    checkedTypes.forEach((box) => {
      if (box.value === pokemon.type) {
        typeMatches = true;
      }
    });
    return typeMatches;
  });
  return filteredTypes;
};

const constructPokemonList = (array) => {
  array.forEach((pokemon) => {
    let pokemonLi = document.createElement("li");
    let pokemonImg = document.createElement("img");
    pokemonImg.setAttribute("src", pokemon.url);
    pokemonLi.innerText = `
Name: ${pokemon.name}
  Height: ${pokemon.height}
  Weight: ${pokemon.weight}
  Type: ${pokemon.type}
  `;
    pokemonLi.append(pokemonImg);
    pokemonUl.append(pokemonLi);
  });
};

// Skapa funktionalitet för att lägga till nya pokemon i ert data.
let nameInput = document.querySelector("#name");
let heightInput = document.querySelector("#height");
let weightInput = document.querySelector("#weight");
let typeInput = document.querySelector("#type");

document.querySelector("#pokemon").addEventListener("click", () => {
  let newPokemon = {
    name: nameInput.value,
    height: heightInput.value,
    weight: weightInput.value,
    type: typeInput.value,
    url: "",
  };
  PokedexData.push(newPokemon);
  pokemonUl.innerHTML = "";
  constructPokemonList(PokedexData);
});

// Extra: Testa att låta en person styla applikationen under tiden i egna branch under något utav momenten.
