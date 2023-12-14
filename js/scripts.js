
let pokemonRepository = (function () {

    let pokemonList = [
      {name: "Foongus" , height: 0.2 , types: ['ground', 'psychic', 'flying'] } ,
      {name: "Jynx" , height: 1.4 , type: ['rock', 'steel', 'fire'] } ,
      {name: "Mew" , height: 0.4, type: ['bug', 'ghost', 'dragon'] } ,
    ]

    function getAll() {
      return pokemonList;
    }

    function add(pokemon) {
      pokemonList.push(pokemon);
    }

    return {
      getAll: getAll,
      add: add
    }

})()


pokemonRepository.getAll().forEach(function(pokemonList) {

  if (pokemonList.height > 1){
    document.write(`<h2>${pokemonList.name} (height: ${pokemonList.height}m)-That is Big!</h2>`); 
  }else{
    document.write(`<h2>${pokemonList.name} (height: ${pokemonList.height}m)</h2>`); 
  }
  
});
