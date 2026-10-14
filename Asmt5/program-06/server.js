const express = require("express");

const app = express();

const authenticateAdmin = (req, res, next) => {
    if (req.query.role === "admin") {
        next();
    } else {
        res.status(403).send("Access Denied");
    }
};

app.get("/home", (req, res) => {
    res.send("Welcome to Home");
});

app.get("/dashboard", authenticateAdmin, (req, res) => {
    res.send("Welcome to Admin Dashboard");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
