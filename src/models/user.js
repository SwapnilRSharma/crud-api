const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    age: {
        type: Number,
        required: false,
        default: 0
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User