const express = require("express");
const app = express();

// Define a GET route for "/users"
app.get("/users", (req, res) => {
    res.send("Hello, World!");
});

// Define a POST route for the root URL ("/")
app.post("/", (req, res) => {
    res.send("Post request received!");
});

// Start the server
app.listen(4000, () => {
    console.log("Server started at http://localhost:4000");
});
