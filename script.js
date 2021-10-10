let myLibrary = [];

const library = document.getElementById('library');
const gameCard = document.createElement('div');
gameCard.classList.add('game-card');

const addGame = document.getElementById('add-game-button');
const modal = document.getElementById('add-game-modal');
const closeButton = document.getElementById('close-button');

function Game(title, author, hours, played){
    this.title = title;
    this.author = author;
    this.hours = hours;
    this.played = played;
    this.info = function(){
        info = title + "\n" + author + "\n" + hours + "\n" + played;
        return info;
    }
}
const game1 = new Game("Hollow knight", "Team cherry", "32 hours", "Played");
const game2 = new Game("Bornout paradise", "Electronic Arts", "40 hours", "Played");
const game3 = new Game("Hollow knight", "Team cherry", "32 hours", "Played");
const game4 = new Game("Bornout paradise", "Electronic Arts", "40 hours", "Played");
const game5 = new Game("Hollow knight", "Team cherry", "32 hours", "Played");
const game6 = new Game("Bornout paradise", "Electronic Arts", "40 hours", "Played");
const game7 = new Game("Hollow knight", "Team cherry", "32 hours", "Played");
const game8 = new Game("Bornout paradise", "Electronic Arts", "40 hours", "Played");
const game9 = new Game("Hollow knight", "Team cherry", "32 hours", "Played");
const game10 = new Game("Bornout paradise", "Electronic Arts", "40 hours", "Played");
const game11= new Game("Hollow knight", "Team cherry", "32 hours", "Played");
const game12 = new Game("Bornout paradise", "Electronic Arts", "40 hours", "Played");
const game13 = new Game("Hollow knight", "Team cherry", "32 hours", "Played");
const game14 = new Game("Bornout paradise", "Electronic Arts", "40 hours", "Played");


myLibrary.push(game1);
myLibrary.push(game2, game3, game4, game5, game6, game7, game8, game9,
    game10, game11, game12, game13, game14);
console.log(myLibrary);

function addBookToLibrary(){
    title = prompt("Write the title of the book: ");
    author = prompt("Write the author of the book: ");
    pages = prompt("Write how many pages does the book have: ");
    read = prompt("Have you read this book yet?: ");
    title = new Game(title, author, hours, played);
    myLibrary.push(title);
}

function displayGames(){
    for(i=0; i < myLibrary.length; i++){
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerText = myLibrary[i].info();
        library.appendChild(gameCard);
    }
}
displayGames();

addGame.addEventListener('click', e=>{
    modal.style.display = "block";
});
closeButton.addEventListener('click', e=>{
    modal.style.display = "none";
});
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}






/*addBookToLibrary();
console.log(title.info());
console.log(myLibrary[0]);
addBookToLibrary();
console.log(myLibrary[1]);
*/
