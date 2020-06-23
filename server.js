const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

const reservation = [
    {
        name: "koan",
        phone: 123456789,
        email: "123@yahoo.com",
        uniqueID: 0,
    }
];
const waitList = [
    {
        name: "koan",
        phone: 123456789,
        email: "123@yahoo.com",
        uniqueID: 0,
    }
];

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

return res.json(false);
  });

app.post("/reservation", function (req, res) {
    var newCharacter = req.body;
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
    console.log(newCharacter);
    characters.push(newCharacter);
    res.json(newCharacter);
});

app.post("/waitList", function (req, res) {
    var newCharacter = req.body;
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
    console.log(newCharacter);
    characters.push(newCharacter);
    res.json(newCharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});