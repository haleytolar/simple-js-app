let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function getAll() {
    return pokemonList;
  }


  function showModal(pokemon) {
    const modalBody = $(".modal-body");
    const modalTitle = $(".modal-title");
    const modalHeader = $(".modal-header");
    modalTitle.empty();
    modalBody.empty();
    const titleElement = document.createElement("h1");
    titleElement.innerText = pokemon.name;
    const contentElement = document.createElement("p");
    contentElement.innerText = "Height: " + pokemon.height + "m";
    const myImage = document.createElement("img");
    myImage.src = pokemon.imageUrl;
    modalBody.append(myImage);
    modalBody.append(titleElement);
    modalBody.append(contentElement);
  }

  $('#exampleModal').on('hidden.bs.modal', function (e) {
    $( ".modal-body" ).html('');
    console.log('hello')
  })

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = pokemon.name;
    listItem.classList.add("list-group-item"); 
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#exampleModal");
    button.classList.add("btn", "btn-outline-info");
    listItem.append(button);
    pokemonList.append(listItem);
    button.addEventListener("click", () => {
      showDetails(pokemon);
    });
  }


  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          height: item.height,
          detailsUrl: item.url,
          imageUrl: item.myImage,
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    const url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      //Details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function add(pokemon) {
    return pokemonList.push(pokemon);
  }
  
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }
  
  loadList().then(function () {
  getAll().forEach(function (pokemon) {
  addListItem(pokemon);
    });
  });
  
  
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
  
})();

// handle search
const handleSearch = (e) => {
  e.preventDefault();
  const searchInput = document.getElementById("search-input").value;
  //clear pokemon list
  const pokemonListContainer = document.querySelector(".pokemon-list");
  pokemonListContainer.innerHTML = null;
  const pokemons = [...pokemonRepository.getAll()];

  console.log("pokemons", pokemons);

  pokemons.forEach((pokemon) => {
    if (pokemon.name.toLowerCase().includes(searchInput.trim().toLowerCase())) {
      pokemonRepository.addListItem(pokemon);
    }
  });
};

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", handleSearch);