import React, { useState } from "react";

function Employee({ employee, onUpdate }) {
    return (
        <div>
            <h3>{employee.name}</h3>
            <p>Department: {employee.department}</p>
            <p>Salary: {employee.salary}</p>

            <button
                onClick={() =>
                    onUpdate(employee.id)
                }
            >
                Update Employee
            </button>
        </div>
    );
}

function App() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: "Amit",
            department: "CSE",
            salary: 50000
        },
        {
            id: 2,
            name: "Neha",
            department: "HR",
            salary: 45000
        }
    ]);

    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("");

    const addEmployee = () => {
        if (!name || !department || !salary) {
            alert("Please enter all details");
            return;
        }

        const newEmployee = {
            id: employees.length + 1,
            name: name,
            department: department,
            salary: salary
        };

        setEmployees([...employees, newEmployee]);

        setName("");
        setDepartment("");
        setSalary("");
    };

    const updateEmployee = (id) => {
        const updatedEmployees = employees.map(employee => {
            if (employee.id === id) {
                return {
                    ...employee,
                    salary: Number(employee.salary) + 5000
                };
            }

            return employee;
        });

        setEmployees(updatedEmployees);
    };

    return (
        <div>
            <h1>Employee Management</h1>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Department"
                value={department}
                onChange={e => setDepartment(e.target.value)}
            />

            <input
                type="number"
                placeholder="Salary"
                value={salary}
                onChange={e => setSalary(e.target.value)}
            />

            <button onClick={addEmployee}>
                Add Employee
            </button>

            <hr />

            {employees.map(employee => (
                <Employee
                    key={employee.id}
                    employee={employee}
                    onUpdate={updateEmployee}
                />
            ))}
        </div>
    );
}

export default App;
