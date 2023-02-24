const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categoryName: {
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
    }

})

const CATEGORY = mongoose.model('category', categorySchema)
module.exports = CATEGORY