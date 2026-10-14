const express = require("express");

const app = express();

const students = [
    { id: 1, name: "Rahul", branch: "CSE" },
    { id: 2, name: "Priya", branch: "ECE" },
    { id: 3, name: "Arjun", branch: "IT" }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

app.get("/faculty", (req, res) => {
    res.json([
        { id: 1, name: "Dr. Kumar", department: "CSE" },
        { id: 2, name: "Dr. Sharma", department: "ECE" }
    ]);
});

app.use((req, res) => {
    res.status(404).json({ message: "Invalid Route" });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
