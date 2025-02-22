const courseModel = require('../Models/Courses_Model')
const notesModel = require("../Models/Notes_Model")
const contactModel = require("../Models/ContactForm_Model")
const AdminModel = require('../Models/AdminModel')
const uploadFile = require("../Configs/Cloudinary")
const fs = require('fs');
const jwt = require("jsonwebtoken")
const env = require('dotenv').config()

const Password = process.env.PASSWORD
const secret_key = process.env.JWT_SECRET


//getting msg
const getMsg = async (req, res)=>{
    try {
        const message = await contactModel.find({});
        return res.json({message, sucess: true})
    } catch (error) {
        res.send(error);
    }
}

//Delete Msg
const deleteMsg = async (req, res)=>{
    try {
        const {id} = req.params;
        
        if (!id){
            return res.json({msg:"Id required in url parameter", success: false})
        }
        
        const deleteMsg = await contactModel.deleteOne({_id : id});

        if (deleteMsg.deletedCount === 0) {
            return res.status(404).json({ success: false, msg: "Message not found" });
        }

        return res.json({success: true, msg:"message deleted successfully"})
    } catch (error) {
        console.log(error)
        return res.json({msg:"Internal server error", success: false})
    }
}

//Course adding controller
const add_notes = async (req, res) => {
    try {
        const { title, desc, notesUrl } = req.body;
        const img_path = req.file?.path;

        // Validate inputs
        if (!title?.trim() || !desc?.trim() || !notesUrl?.trim() || !img_path) {
            return res.status(400).json({ success: false, msg: "All fields are required and must be valid." });
        }

        // Upload image to Cloudinary
        let img_url;
        try {
            const upload_on_cloudinary = await uploadFile(img_path);
            img_url = upload_on_cloudinary.url;
        } catch (err) {
            console.error("Error uploading to Cloudinary:", err);
            return res.status(500).json({ success: false, msg: "Error uploading image to Cloudinary." });
        }

        console.log("Image URL:", img_url);

        // Save notes to MongoDB
        const course = await notesModel.create({ title, desc, notesUrl, img: img_url });
        console.log("Course saved:", course);

        // Delete local image file
        fs.unlink(img_path, (err) => {
            if (err) console.error("Error deleting local image:", err);
        });

        return res.status(201).json({ success: true, msg: "Notes added successfully." });
    } catch (error) {
        console.error("Internal server error:", error);
        return res.status(500).json({ success: false, msg: "Internal server error." });
    }
};

//course controller
const add_courses = async (req, res) => {
    try {
        const { title, desc, courseUrl } = req.body;
        const img_path = req.file?.path;

        // Validate inputs
        if (!title?.trim() || !desc?.trim() || !courseUrl?.trim() || !img_path) {
            return res.status(400).json({ success: false, msg: "All fields are required and must be valid." });
        }

        // Upload image to Cloudinary
        let img_url;
        try {
            const upload_on_cloudinary = await uploadFile(img_path);
            img_url = upload_on_cloudinary.url;
        } catch (err) {
            console.error("Error uploading to Cloudinary:", err);
            return res.status(500).json({ success: false, msg: "Error uploading image to Cloudinary." });
        }

        // Save notes to MongoDB
        const course = await courseModel.create({ title, desc, courseUrl, img: img_url });

        // Delete local image file
        fs.unlink(img_path, (err) => {
            if (err) console.error("Error deleting local image:", err);
        });

        return res.status(201).json({ success: true, msg: "Notes added successfully." });
    } catch (error) {
        console.error("Internal server error:", error);
        return res.status(500).json({ success: false, msg: "Internal server error." });
    }
};

// delete Courese 
const deleteCourse = async(req, res)=>{
    try {
        const {id} = req.params;
        
        if (!id){
            return res.json({sucess: true, msg:"Id required in url"})
        }

        const result = await courseModel.deleteOne({_id : id})

        if (result.deletedCount === 0) {
            return res.status(404).json({ success: false, msg: "Course not found" });
        }

        return res.json({success: true, msg:"course deleted successfully"})
    } catch (error) {
        console.log(error)
        return res.json({success:false , msg:"Internal server error"})
    }
}

const deleteNotes = async(req, res)=>{
    try {
        const {id} = req.params;
        
        if (!id){
            return res.json({sucess: true, msg:"Id required in url"})
        }

        const result = await notesModel.deleteOne({_id : id})

        if (result.deletedCount === 0) {
            return res.status(404).json({ success: false, msg: "Notes not found" });
        }

        return res.json({success: true, msg:"Notes deleted successfully"})
    } catch (error) {
        console.log(error)
        return res.json({success:false , msg:"Internal server error"})
    }
}

//Update Admin details controller
const update_admin = async(req, res)=>{
    try {
        const {name, about} = req.body;
        const img_path = req.file.path;

        if (!name || !about || !img_path){
            return res.json({sucess: false, msg:"All fiels are required"})
        }

        // Upload image to Cloudinary
        let img_url;
        try {
            const upload_on_cloudinary = await uploadFile(img_path);
            img_url = upload_on_cloudinary.url;
        } catch (err) {
            console.error("Error uploading to Cloudinary:", err);
            return res.status(500).json({ success: false, msg: "Error uploading image to Cloudinary." });
        }

        //Save in mongoDB
        const data = await AdminModel.create({img: img_url, name, about})

        fs.unlink(img_path, (err) => {
            if (err) console.error("Error deleting local image:", err);
        });

        return res.status(201).json({ success: true, msg: "Admin updated successfully." });
    } catch (error) {
        console.log(error)
    }
}

//admin Login
const admin_login = async(req, res)=>{
    try {
        const {username, password} = req.body;

        if (!username || !password){
            return res.json({sucess: false, msg: "Fields are required"});
        }

        if (username === "@admin" && password === Password) {
            const token = jwt.sign({ username }, secret_key, { expiresIn: "1h" }); // Use a strong secret key
            return res.status(200).json({ success: true, token });
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {getMsg, add_notes, add_courses, update_admin, admin_login, deleteMsg, deleteCourse, deleteNotes}