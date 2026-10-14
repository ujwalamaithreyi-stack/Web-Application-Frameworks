const express = require("express");

const app = express();

app.use(express.json());

let products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mobile", price: 25000 }
];

app.get("/products", (req, res) => {
    res.json(products);
});

app.get("/products/:id", (req, res) => {
    const product = products.find(
        p => p.id === parseInt(req.params.id)
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

app.post("/products", (req, res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(product);

    res.status(201).json(product);
});

app.put("/products/:id", (req, res) => {
    const product = products.find(
        p => p.id === parseInt(req.params.id)
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;

    res.json(product);
});

app.delete("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products.splice(index, 1);

    res.json({
        message: "Product deleted successfully"
    });
});

app.listen(5000, () => {
    console.log("Product API running on port 5000");
});
