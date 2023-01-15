const express = require("express");
const app = express();

app.get('/',(req, res) => {
    res.send("Index Page on Docker");
});

app.get('/welcome', (req,res) => {
    res.send('<html><h1>Welcome Page</h1></html>');
}); 

app.listen('5000', ()=> console.log("Express Server running at port 5000"));