let myLibrary = [];

const library = document.getElementById('library');

const gameCard = document.createElement('div');
gameCard.classList.add('game-card');

library.appendChild(gameCard);

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

function addBookToLibrary(){
    title = prompt("Write the title of the book: ");
    author = prompt("Write the author of the book: ");
    pages = prompt("Write how many pages does the book have: ");
    read = prompt("Have you read this book yet?: ");
    title = new Game(title, author, hours, played);
    myLibrary.push(title);
}

const game1 = new Game("Hollow knight", "Team cherry", "32 hours", "Played");
const game2 = new Game("Bornout paradise", "Electronic Arts", "40 hours", "Played");

gameCard.innerText = game1.info();


myLibrary.push(game1);
myLibrary.push(game2);
console.log(myLibrary);


/*addBookToLibrary();
console.log(title.info());
console.log(myLibrary[0]);
addBookToLibrary();
console.log(myLibrary[1]);
*/
