let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        info = title + ", " + author +", "+ pages + ", "+ read;
        return info;
    }
}

function addBookToLibrary(){
    title = prompt("Write the title of the book: ");
    author = prompt("Write the author of the book: ");
    pages = prompt("Write how many pages does the book have: ");
    read = prompt("Have you read this book yet?: ");
    title = new Book(title, author, pages, read);
    myLibrary.push(title);
}
addBookToLibrary();
console.log(title.info());
console.log(myLibrary[0]);
addBookToLibrary();
console.log(myLibrary[1]);

