let pokemonRepository=function(){
let e=[];
function t(){return e};

function n(e){
    return fetch(e.detailsUrl).then(function(e){return e.json()})
    .then(function(t){
    e.imageUrl=t.sprites.front_default,
    e.height=t.height,e.types=t.types}).catch(function(e){
    console.error(e)})}
    
function o(t){
    return e.push(t)}
    return{getAll:t,add:o,addListItem:function e(t){
    let o=document.querySelector(".pokemon-list"),
        a=document.createElement("li"),
        i=document.createElement("button");
        i.innerText=t.name,
        a.classList.add("list-group-item"),
        i.setAttribute("data-toggle","modal"),
                    i.setAttribute("data-target","#exampleModal"),
                    i.classList.add("btn","btn-outline-info"),
                    a.append(i),
                    o.append(a),
                    i.addEventListener("click",()=>{(function e(t){
                        n(t).then(function(){
                            var e;
                            let n,o,a,i,r;e=t,
                            n=$(".modal-body"),
                            o=$(".modal-title"),$(".modal-header"),
                            o.empty(),
                            n.empty(),
                            (a=document.createElement("h1")).innerText=e.name,
                            (i=document.createElement("p")).innerText="Height: "+e.height+"m",
                            (r=document.createElement("img")).src=e.imageUrl,
                            n.append(r),
                            n.append(a),
                            n.append(i),
                            $("#exampleModal").click(function(){$(button).toggle("modal")})})})(t)})},
                            loadList:function e(){
                                return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e){
                                    return e.json()}).then(function(e){
                                        e.results.forEach(function(e){
                                            o({name:e.name,height:e.height,detailsUrl:e.url,imageUrl:e.myImage})
                                        })}).catch(function(e){console.error(e)})},
                                        loadDetails:n}}();
                                        pokemonRepository.loadList().then(function(){
                                            pokemonRepository.getAll().forEach(function(e){
                                                pokemonRepository.addListItem(e)})});
                                                const handleSearch=e=>{e.preventDefault();
                                                    let t=document.getElementById("search-input").value,
                                                    n=document.querySelector(".pokemon-list");
                                                    n.innerHTML=null;let o=[...pokemonRepository.getAll()];
                                                    console.log("pokemons",o),
                                                    o.forEach(e=>{e.name.toLowerCase().includes(t.trim().toLowerCase())&&pokemonRepository.addListItem(e)})},
                                                    searchBtn=document.getElementById("search-btn");searchBtn.addEventListener("click",handleSearch);