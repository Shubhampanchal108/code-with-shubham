const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required : true,
    }
})

const Contact = mongoose.model("contact_me", schema)

module.exports = Contact