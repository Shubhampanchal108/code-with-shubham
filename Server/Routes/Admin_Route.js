const express = require("express")
const Router = express.Router();
const {getMsg, add_notes, add_courses, update_admin, admin_login, deleteMsg, deleteCourse, deleteNotes} = require("../Controllers/admin_Controller");
const upload = require("../Middlewares/multer")
const admin_auth = require('../Middlewares/Admin_Auth.js')

//Msg Routes
Router.get("/getmsg",getMsg)
Router.delete("/delete-msg/:id",deleteMsg)

//admin route
Router.post("/login", admin_login)
Router.post("/update-admin", upload.single("img"), update_admin);

//course route
Router.post("/add_course",upload.single("img"), add_courses)
Router.delete("/delete_course/:id", deleteCourse)

//notes route
Router.post("/add_notes",upload.single("img"), add_notes)
Router.delete("/delete_notes/:id", deleteNotes)

module.exports = Router