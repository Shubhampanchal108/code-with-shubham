const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    img: {
        type:String,
    },
    about: {
        type: String,
        required: true
    }
})

const admin = mongoose.model("admin", schema)

module.exports = admin