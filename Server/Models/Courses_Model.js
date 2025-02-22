const mongoose = require("mongoose")

const schema = mongoose.Schema({
    title: {
        type: String,
        required : true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
        unique: true
    },
    courseUrl:{
        type: String,
        required : true,
        unique: true,
    }
})

const courses = mongoose.model("courses", schema)

module.exports = courses