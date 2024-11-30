const Joi = require("joi");
const path = require('path');
Joi.objectId = require("joi-objectId")(Joi);
const cors = require('cors');

const blogs = require("./routes/blogs");
const tours = require("./routes/tours");
const users = require("./routes/users");
const auth = require("./routes/auth");
const frontBlogs = require("./routes/frontend/blogs");
const frontTours = require("./routes/frontend/tours");


const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
mongoose
.connect(
    "mongodb+srv://ai7182844:zWaRlXUj4390ZKRi@travello.fb7ta.mongodb.net/Education?retryWrites=true&w=majority&appName=Travello"
)
.then(() => {
    console.log("connecting to database");
})
.catch((err) => {
    console.error("could not connect to database", err);
});


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/uploads', express.static('uploads'));
app.use(cors());

app.use("/blogs", blogs);
app.use("/tours", tours);
app.use("/api/login", auth);
app.use("/api/register", users);

app.use('/adminlte', express.static(path.join(__dirname, 'node_modules', 'admin-lte')));
app.use('/fontawesome', express.static(path.join(__dirname, 'node_modules', '@fortawesome', 'fontawesome-free')));
app.set('view engine', 'ejs');

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/blogs/new", (req, res) => {
    res.render("add_blog");
});

app.get("/tours/new", (req, res) => {
    res.render("add_blog");
});
app.use('/api/blogs', frontBlogs);  
app.use('/api/tours', frontTours);  

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`your server listening on port ${port}`);
});
