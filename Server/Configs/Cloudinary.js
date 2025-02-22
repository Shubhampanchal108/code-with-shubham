const cloudinary = require('cloudinary').v2
const env = require("dotenv").config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})


const uploadFile = async (filepath)=>{
    try {
        if (!filepath){
            return null
        }

        const response = await cloudinary.uploader.upload(filepath)
        return response
    } catch (error) {
        console.log("internal server error")
    }
}

module.exports = uploadFile