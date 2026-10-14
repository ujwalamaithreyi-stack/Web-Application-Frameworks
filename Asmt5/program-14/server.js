const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/about", (req, res) => {
    res.send("This is the About Page");
});

app.get("/contact", (req, res) => {
    res.send("This is the Contact Page");
});

app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
