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
const cleanCode = new Book("clean code", "someone", 69, true);
console.log(cleanCode.info());
