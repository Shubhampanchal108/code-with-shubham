const courseModel = require('../Models/Courses_Model')
const notesModel = require("../Models/Notes_Model")
const contactModel = require("../Models/ContactForm_Model")
const AdminModel = require('../Models/AdminModel')

//courses controller
const getCourse = async (req, res)=>{
   try {
    const course = await courseModel.find({});
    res.json({course, sucess: true})
   } catch (error) {
    console.log(error)
    res.json({msg: "Fail to fetch", error: error, sucess: false})
   }
}

//notes model
const getNotes = async (req, res)=>{
   try {
    const notes = await notesModel.find({});
    res.json({notes, sucess: true})
   } catch (error) {
    console.log(error)
    res.json({msg: "Fail to fetch", error: error, sucess: false})
   }
}

//admin details feching
const adminsDetails = async (req, res)=>{
   try {
    const admin = await AdminModel.find({});
    res.json({admin, sucess: true})
   } catch (error) {
    console.log(error)
    res.json({msg: "Fail to fetch", error: error, sucess: false})
   }
}

//contact controller
const contact = async (req, res) => {
   try {
      const { name, email, message, mobile } = req.body;

      // Validate required fields
      if (!name || !email || !message, !mobile) {
         return res.status(400).json({ success: false, msg: "All fields are required." });
      }

      // Insert the data into the database
      const result = await contactModel.create({ name, email, message, mobile });
      return res.json({sucess: true, msg:"message inserted sucessfully"}) 

   } catch (error) {
      console.error("Error inserting message:", error);
      return res.status(500).json({ success: false, error: "An internal server error occurred." });
   }
};

module.exports = {getCourse, getNotes, adminsDetails, contact}