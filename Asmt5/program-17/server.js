const express = require("express");

const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Rahul",
        branch: "CSE",
        semester: 5
    },
    {
        id: 2,
        name: "Priya",
        branch: "ECE",
        semester: 5
    }
];

// GET all students
app.get("/students", (req, res) => {
    res.json(students);
});

// GET student by ID
app.get("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === parseInt(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// POST student
app.post("/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        branch: req.body.branch,
        semester: req.body.semester
    };

    students.push(student);

    res.status(201).json(student);
});

// PUT student
app.put("/students/:id", (req, res) => {
    const student = students.find(
        s => s.id === parseInt(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name || student.name;
    student.branch = req.body.branch || student.branch;
    student.semester = req.body.semester || student.semester;

    res.json(student);
});

// DELETE student
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(
        s => s.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students.splice(index, 1);

    res.json({
        message: "Student deleted successfully"
    });
});

app.listen(5000, () => {
    console.log("Student Management API running on port 5000");
});
