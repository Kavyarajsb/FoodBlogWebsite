

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    articlename: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date:{
        type: String
    },
    articlecontent: {
        type: String,
        required: true
    },
    follow: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
    
})

let blogDATA = mongoose.model('article', blogSchema)

module.exports = blogDATA