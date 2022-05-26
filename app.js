const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/users", usersRouter);


// Home Route
app.use("/", (req,res) => {
    //way 1
    //res.send({messgae: "Welcome to my REST API Server with text method"});

    // way 2
    res.sendFile(__dirname + "/views/index.html");
});


// route not found
app.use((req, res, next) => {
    res.status(404).json({messsage: "Route not found"});
});


// Server error
app.use((error, req, res, next) => {
    res.status(500).json({messsage: "There is a server error occur"})
});

module.exports = app;

