var library = function (libName) {
    this.name = libName;
    this.totalShelves = 0;
    this.books = {};
    this.reportTotalShelves = function () {
        console.log("Number of Shelves in " + libName + ": " + this.totalShelves + "\n");
    };

    this.reportAllBooks = function () {
        console.log("Listing books from " + libName + "...");
        for (var book in this.books) {
            console.log(book);
        }
        console.log("__End of listing__ \n");
    };
};

var shelf = function (shelfName, libName) {
    libName.totalShelves++;
    this.lib = libName;
    this.name = shelfName;
    this.books = {};
    this.totalBooks = 0;
    this.reportBooks = function () {
        console.log("Listing books from " + shelfName + "...");
        for (var bookName in this.books)
        console.log(bookName);
        console.log("__End of listing__ \n");
    };
};

var book = function (bookName) {
    this.name = bookName;

    this.enshelf = function (shelfName) {
        shelfName.books[bookName] = shelfName;
        this.shelfName = shelfName;
        shelfName.lib.books[bookName] = shelfName.lib;
    };

    this.unshelf = function (shelfName) {
        delete shelfName.books[bookName];
        delete shelfName.lib.books[bookName];
    };
};

var library1 = new library ("library1");
var shelf1 = new shelf ("shelf1", library1);
var shelf2 = new shelf ("shelf2", library1);
var book1 = new book ("Piano");
var book2 = new book ("Jake");
var book3 = new book ("Taco");

//report all shelves
library1.reportTotalShelves();

//Putting books on Shelf1
book1.enshelf(shelf1);
book2.enshelf(shelf1);

//Putting books on Shelf2
book3.enshelf(shelf2);

//Report books from Shelf1
shelf1.reportBooks();

//unshelf book1 (Tagia)
book1.unshelf(shelf1);

//Report books from Shelf1
shelf1.reportBooks();

//Report all books from Library 1
library1.reportAllBooks();