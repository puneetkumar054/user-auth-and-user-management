const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        desc: "The user's email address.",
        trim: true,
        type: String,
        index: true,
        unique: true,
        required: true,
    },
    password: {
        desc: "user password",
        trim: true,
        type: String,
        required: true,
        select: false,
    },
    name: {
        desc: "The user's name.",
        trim: true,
        type: String,
        required: true,
    },
    age: {
        desc: "The users's age.",
        type: Number,
    },
    gender: {
        desc: "user gender.",
        trim: true,
        type: String,
        enum: ["male", "female"],
        default: "Others",
        required: true,
    },
    mobile: {
        desc: "The users's mobile number .",
        type: Number,
    },
    isActive: {
        desc: "is Active.",
        type: Boolean,
        default: true,
        required: true,
    },
    userType: {
        desc: "user roles.",
        trim: true,
        type: String,
        enum: ["admin", "user"],
        default: "admin",
        required: true,
    },
},
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    })

module.exports = mongoose.model('users', UserSchema);