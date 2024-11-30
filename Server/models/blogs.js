const Joi = require('joi');
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    cover: {
        type: String
    },
    date: { type: Date, default: Date.now }
});
const Blog = mongoose.model("Blog", blogSchema);

function handleBlogValidation(blog) {
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        desc: Joi.string().min(15).required(),
        });
    return schema.validate(blog, { abortEarly: false });
}

exports.Blog = Blog;
exports.handleBlogValidation = handleBlogValidation;