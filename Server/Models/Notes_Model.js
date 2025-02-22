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
    },
    notesUrl:{
        type: String,
        required : true,
        unique: true,
    }
})

const Notes = mongoose.model("notes", schema)

module.exports = Notes