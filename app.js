const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./api/routes/user_route");

const app = express();

const PORT = process.env.PORT || 5000

app.use(express.json());

// app.use("/",(req,res,next) => {
//     res.send("Hello World");
// });

app.use('/users',UserRouter);


mongoose.connect("mongodb+srv://admin:DmTXkA8JqFm7AZ4j@cluster0.zojluc9.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(PORT,()=> {
        console.log("Listening to port " + PORT);
    });
}).catch((err) => {
    console.log(err);
});



//admin
//DmTXkA8JqFm7AZ4j
//mongodb+srv://admin:<password>@cluster0.zojluc9.mongodb.net/?retryWrites=true&w=majority