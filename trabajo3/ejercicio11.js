class Book {
    constructor(title, author, ownedBooks, borrowedBooks){
        this.title = title;
        this.author = author;
        this.ownedBooks = ownedBooks;
        this.borrowedBooks = borrowedBooks;
    }

    wasBorrowed(){
        if(this.ownedBooks > 0){
            this.ownedBooks -= 1;
            this.borrowedBooks += 1;
            return this.ownedBooks;
        } else {
            return this.ownedBooks;
        }
    };

    wasRetrived(){
        if(this.borrowedBooks > 0){
            this.ownedBooks += 1;
            this.borrowedBooks -= 1;
            return this.borrowedBooks;
        } else {
            return this.borrowedBooks;
        }
    }
}

Book.prototype.toString = function bookRepr() {
    return `libro{ \n\ttitle: ${this.title}, \n\tautor: ${this.author}, \n\tLibros propios: ${this.ownedBooks}, \n\tlibros prestados: ${this.borrowedBooks} \n}`;
}
