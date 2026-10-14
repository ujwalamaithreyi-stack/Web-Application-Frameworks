const express = require("express");

const app = express();

app.use(express.json());

const logger = (req, res, next) => {
    console.log(
        `${req.method} ${req.url} - ${new Date()}`
    );
    next();
};

app.use(logger);

let events = [
    {
        id: 1,
        name: "Tech Fest",
        date: "2026-11-10",
        venue: "College Auditorium"
    },
    {
        id: 2,
        name: "Coding Contest",
        date: "2026-11-15",
        venue: "Computer Lab"
    }
];

// Add an event
app.post("/events", (req, res) => {
    const event = {
        id: events.length + 1,
        name: req.body.name,
        date: req.body.date,
        venue: req.body.venue
    };

    events.push(event);

    res.status(201).json(event);
});

// Retrieve all events
app.get("/events", (req, res) => {
    res.json(events);
});

// Retrieve event by ID
app.get("/events/:id", (req, res) => {
    const event = events.find(
        e => e.id === parseInt(req.params.id)
    );

    if (!event) {
        return res.status(404).json({
            message: "Event not found"
        });
    }

    res.json(event);
});

// Update event
app.put("/events/:id", (req, res) => {
    const event = events.find(
        e => e.id === parseInt(req.params.id)
    );

    if (!event) {
        return res.status(404).json({
            message: "Event not found"
        });
    }

    event.name = req.body.name || event.name;
    event.date = req.body.date || event.date;
    event.venue = req.body.venue || event.venue;

    res.json(event);
});

// Delete event
app.delete("/events/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = events.findIndex(
        e => e.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Event not found"
        });
    }

    events.splice(index, 1);

    res.json({
        message: "Event deleted successfully"
    });
});

// Invalid route
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

app.listen(5000, () => {
    console.log("Event Management API running on port 5000");
});
