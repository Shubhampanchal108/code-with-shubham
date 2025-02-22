const express = require('express')
const DB_Connection = require('./Configs/Database.js');
const user_Router = require('./Routes/main_Route.js');
const admin_Router = require("./Routes/Admin_Route.js")
const env = require('dotenv').config();
const cors = require('cors')
const app = express();

const PORT = process.env.PORT;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: 'http://localhost:5173' // Allow requests only from this origin
  }));

//Default Route for server
app.get("/", (req, res)=>{
    res.send("Hello from server");
})

//Routes
app.use("/api/main", user_Router);
app.use("/api/admin", admin_Router)


//Database connection
DB_Connection()

app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port ${PORT}`)
})