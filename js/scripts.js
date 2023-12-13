let pokemonList = [
  {name: "Foongus" , height: 0.2 , types: ['ground', 'psychic', 'flying'] } ,
  {name: "Jynx" , height: 1.4 , type: ['rock', 'steel', 'fire'] } ,
  {name: "Mew" , height: 0.4, type: ['bug', 'ghost', 'dragon'] } ,
]
//for loop 
for (let i = 0; i < pokemonList.length; i++) {
//if height is greater than one end gets -Wow, That's big!
  let html;
  if (pokemonList[i].height > 1) {
    html = `<h2>${pokemonList[i].name} (height: ${pokemonList[i].height}m)-Wow, That's big!</h2>`;
  }else{
    html = `<h2>${pokemonList[i].name} (height: ${pokemonList[i].height}m)</h2>`;
  }
//puts content in html
  document.write(html);
}





