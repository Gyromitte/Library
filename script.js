let myLibrary = [];

const library = document.getElementById('library');
const gameCard = document.createElement('div');
gameCard.classList.add('game-card');

const addGame = document.getElementById('add-game-button');
const modal = document.getElementById('add-game-modal');
const closeButton = document.getElementById('close-button');

const submittButton = document.getElementById('submit-button');

function Game(title, author, completed, played){
    this.title = title;
    this.author = author;
    this.completed = completed;
    this.played = played;
    this.info = function(){
        info = title + "\n" + author + "\n" + completed + "\n" + played;
        return info;
    }
}

function addBookToLibrary(){
    title = document.getElementById('name').value;
    author = document.getElementById('developer').value;
    if(document.getElementById('played').checked){
        completed = "Played";
    }
    if(!document.getElementById('played').checked){
        completed = "Not played";
    }
    if(document.getElementById('completed').checked){
        played = "Completed";
    }
    if(!document.getElementById('completed').checked){
        played = "Not completed";
    }
    title = new Game(title, author, completed, played);
    myLibrary.push(title);
}

function displayGames(){
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerText = myLibrary[myLibrary.length-1].info();
        library.appendChild(gameCard);
}

addGame.addEventListener('click', e=>{
    modal.style.display = "block";
});
closeButton.addEventListener('click', e=>{
    modal.style.display = "none";
});
submittButton.addEventListener('click', e=>{
    event.preventDefault();
    addBookToLibrary();
    displayGames();
    modal.style.display = "none";
    document.forms[0].reset();
    console.log(myLibrary);
});
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}