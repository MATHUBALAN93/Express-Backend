const express = require("express");
require('dotenv').config();
const app = express();
const connectDB = require('./config/db')
const adminRoutes = require('./routes/adminRoutes')


app.use(express.json());
connectDB();

app.use('/stud' , adminRoutes)

app.get('/' , (req ,res) =>{
    res.status(200).send({message : "Welcome to LMS portal"});
})

app.listen(process.env.PORT || 4000 , ()=>{
    console.log("Server Listening")
})
