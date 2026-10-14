const express = require("express");

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Rahul", branch: "CSE" },
    { id: 2, name: "Priya", branch: "ECE" }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === parseInt(req.params.id)
    );

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

app.post("/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        branch: req.body.branch
    };

    students.push(student);

    res.status(201).json(student);
});

app.listen(5000, () => {
    console.log("Student API running on port 5000");
});
