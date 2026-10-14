const express = require("express");

const app = express();

app.use(express.json());

const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
};

app.use(requestLogger);

let employees = [
    { id: 1, name: "Amit", department: "CSE" },
    { id: 2, name: "Neha", department: "HR" }
];

app.get("/employees", (req, res) => {
    res.json(employees);
});

app.get("/employees/:id", (req, res) => {
    const employee = employees.find(
        e => e.id === parseInt(req.params.id)
    );

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    res.json(employee);
});

app.post("/employees", (req, res) => {
    const employee = {
        id: employees.length + 1,
        name: req.body.name,
        department: req.body.department
    };

    employees.push(employee);

    res.status(201).json(employee);
});

app.listen(5000, () => {
    console.log("Employee API running on port 5000");
});
