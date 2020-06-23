const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservation = [
    {
        customerName: "koan",
        phoneNumber: 123456789,
        customerEmail: "123@yahoo.com",
        customerID: 0,
    }
];
const waitList = [
    {
        customerName: "koan",
        phoneNumber: 123456789,
        customerEmail: "123@yahoo.com",
        customerID: 0,
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

app.get("/api/waitlist",function (req, res) {
    res.json(waitList);
});

app.get("/api/tables",function (req, res) {
    res.json(reservation);
});

app.post("/api/tables", function (req, res) {
    if (reservation.length < 5) {
        reservation.push(req.body);
        console.log(req.body);
        console.log(reservation);
    }else {
        waitList.push(req.body);
    }
    // var newCharacter = req.body;
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
    // console.log(newCharacter);
    // characters.push(newCharacter);
    // res.json(newCharacter);
});

app.post("/waitList", function (req, res) {
    console.log(req.body);
    // var newCharacter = req.body;
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
    // console.log(newCharacter);
    // characters.push(newCharacter);
    res.json("gotresponse");
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

// for (var i = 0; i < 5; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }