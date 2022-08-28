const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error(`Invalid email ${value}`);
            }
        },
        trim: true
    },
    phone: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isMobilePhone(value)) {
                throw new Error(`Invalid phone ${value}`);
            }
        },
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true,
        enum: ['male', 'female']
    },
    addressLine1: {
        type: String,
        required: true,
        trim: true
    },
    addressLine2: {
        type: String,
        trim: true
    },
    dob: {
        type: String,
        trim: true,
        required: true
    },
    ssn: {
        type: String,
        trim: true,
        required: true
    },
}, {timestamps: {createdAt: true, updatedAt: true}});

const User = mongoose.model('User', userSchema);

module.exports = User;
