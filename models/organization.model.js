const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    sector: {
        type: String,
    },
    size: {
        type: String,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'users'
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const CATEGORY = mongoose.model('organization', categorySchema)
module.exports = CATEGORY
