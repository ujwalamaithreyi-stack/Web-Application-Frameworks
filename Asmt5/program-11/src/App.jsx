import React from "react";

function Student({ name, branch, semester }) {
    return (
        <div>
            <h2>Student Details</h2>
            <p>Name: {name}</p>
            <p>Branch: {branch}</p>
            <p>Semester: {semester}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Student
                name="Rahul"
                branch="CSE"
                semester="5"
            />

            <Student
                name="Priya"
                branch="ECE"
                semester="5"
            />
        </div>
    );
}

export default App;
