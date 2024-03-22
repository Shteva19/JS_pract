const Library = {
    books: [],
    addBook: function(bookName, bookAuthor, bookYear, bookId) {
        const newBook = {
            name: bookName,
            author: bookAuthor,
            year: bookYear,
            id: bookId
        };
        this.books.push(newBook);
    },
    printBookInfo: function(bookId) {
        const book = this.books.find(book => book.id === bookId);
        if (book) {
            console.log("Book Info:");
            console.log("Name: " + book.name);
            console.log("Author: " + book.author);
            console.log("Year: " + book.year);
        } else {
            console.log("Book with ID " + bookId + " not found.");
        }
    },
    printAllBooks: function() {
        console.log("All Books:");
        this.books.forEach(book => {
            console.log("ID: " + book.id);
            console.log("Name: " + book.name);
            console.log("Author: " + book.author);
            console.log("Year: " + book.year);
            console.log("--------------------");
        });
    }
};


Library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, 1);
Library.addBook("To Kill a Mockingbird", "Harper Lee", 1960, 2);
Library.addBook("1984", "George Orwell", 1949, 3);

Library.printAllBooks();
Library.printBookInfo(2);