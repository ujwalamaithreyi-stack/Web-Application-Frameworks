const express = require("express");

const app = express();

const requestLogger = (req, res, next) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Date and Time:", new Date());
    next();
};

app.use(requestLogger);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
