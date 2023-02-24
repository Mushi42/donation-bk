const mongoose = require('mongoose')

const charitySchema = new mongoose.Schema({
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
        ref: 'organization'
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Charity = mongoose.model('charity', charitySchema)
module.exports = Charity
