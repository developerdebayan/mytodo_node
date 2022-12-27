const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000

app.use("/",(req,res,next) => {
    res.send("Hello World");
});

app.listen(PORT,()=> {
    console.log("Listening to port " + PORT);
});