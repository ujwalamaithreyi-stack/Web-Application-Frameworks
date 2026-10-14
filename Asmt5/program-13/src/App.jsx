import React, { useState, useEffect } from "react";

function App() {
    const [products, setProducts] = useState([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Mobile" }
    ]);

    useEffect(() => {
        console.log("Product list modified");
    }, [products]);

    const addProduct = () => {
        const newProduct = {
            id: products.length + 1,
            name: "Tablet"
        };

        setProducts([...products, newProduct]);
    };

    return (
        <div>
            <h1>Product List</h1>

            <button onClick={addProduct}>
                Add Product
            </button>

            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
