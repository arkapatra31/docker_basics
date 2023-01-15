const express = require("express");
const app = express();

app.get('/',(req, res) => {
    res.send("Index Page on Docker");
});

app.listen('5000');