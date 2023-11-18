const cookieParser = require("cookie-parser");
const express = require("express");
const connectDB = require("./config/conn");
const dotenv = require("dotenv").config();

//Connecxion avec la db
connectDB(); 

//Créer une application à partir de express
const app = express() ;
const route = require('./router/userRoutes') ;

//Utilisation de express.json pour obtenir une requête de données json
app.use(express.json()) ;
//Utilisation de routes
app.use('/api', route) ;


app.use(cookieParser());

//Écoute du serveur
app.listen(process.env.PORT,()=>{
console.log(`Server is listening at ${process.env.PORT}`) ;
})
