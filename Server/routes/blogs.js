const { Blog, handleBlogValidation } = require('../models/blogs');
const upload = require('../routes/image_uploader');
const express = require("express");
const router = express.Router();

router.get("/new", async (req, res) => {
    res.render("add_blog", { errors: [], blog: {} });
});

router.get("/:id/edit", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).send("Blog not found");
        }
        res.render("edit_blog", { errors: [], blog: blog });
    } catch (err) {
        res.status(500).send("An error occurred while fetching blog");
    }
});

router.get("/", async (req, res) => {
    const blogs = await Blog.find().sort("name");
    res.render("blogs", { blogs });
});

router.get("/:id", async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
        return res.status(404).send("the blog is not available");
    }
    res.render("view_blog", { blog });
});


router.post("/", upload.single('cover'), async (req, res) => {
    const { error } = handleBlogValidation(req.body);
    if (error) {
        const errorMessages = error.details.map((err) => err.message);
        return res.status(400).send(errorMessages);
    }


    let blog = new Blog({
        name: req.body.name,
        desc: req.body.desc,
        date: req.body.date,
    });
    if (req.file) {
        req.body.cover = req.file.path.replace(/\\/g, '/');
        blog.cover = req.file.path;
    }
    try {
        blog = await blog.save();
        res.status(201).send(blog);
    } catch (error) {
        res.status(500).send('An error occurred');
    }
});

router.put("/:id", upload.single('cover'), async (req, res) => {
    const { error } = handleBlogValidation(req.body);
    if (error) {
        const errorMessages = error.details.map((err) => err.message);
        return res.status(400).render('edit_blog', { errors: errorMessages, blog: req.body });
    }

    let blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).send('the blog with given id is not found');

    const updatedData = {
        name: req.body.name,
        desc: req.body.desc,
        date: req.body.date,
    };
    if (req.file) {
        req.body.cover = req.file.path.replace(/\\/g, '/');
        updatedData.cover = req.file.path;
    }
    blog = await Blog.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.status(200).send(blog);
});

router.delete("/:id", async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).send("The blog is not available");
        }
        res.sendStatus(204);
    } catch (error) {
        res.status(500).send("An error occurred during deletion");
    }
});
module.exports = router;