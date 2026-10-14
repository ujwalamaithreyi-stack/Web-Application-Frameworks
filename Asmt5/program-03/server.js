const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to ExpressJS");
});

app.get("/about", (req, res) => {
    res.send("NodeJS Laboratory");
});

app.use((req, res) => {
    res.status(404).send("404 - Invalid Route");
});

app.listen(5000, () => {
    console.log("Express server running at http://localhost:5000");
});
