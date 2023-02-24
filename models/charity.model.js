const mongoose = require('mongoose')

const charitySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    donation_amount: {
        type: Number,
        required: true
    },
    donation_sender: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    donation_receiver: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Charity = mongoose.model('charity', charitySchema)
module.exports = Charity
