const dotenv=require('dotenv');
dotenv.config();

const express =require('express');
const app=express()

const cookieParser=require("cookie-parser")

const cors = require('cors');
const connectDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// Database connection
connectDB();


app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports=app;