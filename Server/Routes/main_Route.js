const express = require('express')
const Router = express.Router();
const {getCourse, getNotes, adminsDetails, contact} = require("../Controllers/main_Controller.js")

//Route for users
Router.get("/courses", getCourse);
Router.get("/notes", getNotes);
Router.get("/adminDetails", adminsDetails);
Router.post("/contact", contact)

module.exports = Router;