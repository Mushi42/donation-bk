const mongoose = require('mongoose')

const charitySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    updatedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    location: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },

})

const Charity = mongoose.model('charity', charitySchema)
module.exports = Charity