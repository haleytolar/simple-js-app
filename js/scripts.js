var pokemonRepository = (function () {

  let repository = [

    {name: "Foongus" , height: 0.2 , types: ['ground', 'psychic', 'flying'] } ,
    {name: "Jynx" , height: 1.4 , type: ['rock', 'steel', 'fire'] } ,
    {name: "Mew" , height: 0.4, type: ['bug', 'ghost', 'dragon'] } ,
  ]

  function getAll() {
    return repository;
  }

  function add(pokemon) {
    if (
      typeof pokemon === "object" && 
      "name" in pokemon && 
      "height" in pokemon && 
      "types" in pokemon 
      ) {
        repository.push(pokemon);
      } else {
        console.log("pokemon is not correct");
      }

  }

  function showDetails(pokemon) {
      console.log(pokemon);
  };

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-button");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function() {
      showDetails(pokemon);
  });

  }
  
  
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem

  };
})();



pokemonRepository.getAll().forEach(function (pokemon) {

  pokemonRepository.addListItem(pokemon) 

});



