const express = require("express");

const app = express();

app.use(express.json());

let books = [
    { id: 1, title: "JavaScript Basics", author: "John" },
    { id: 2, title: "NodeJS Guide", author: "David" }
];

app.get("/books", (req, res) => {
    res.json(books);
});

app.post("/books", (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };

    books.push(book);

    res.status(201).json(book);
});

app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;

    res.json(book);
});

app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    const deletedBook = books.splice(index, 1);

    res.json({
        message: "Book deleted successfully",
        book: deletedBook[0]
    });
});

app.listen(5000, () => {
    console.log("Book API running on port 5000");
});
