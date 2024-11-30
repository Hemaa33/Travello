const { Tour, handleTourValidation } = require('../models/tours');
const upload = require('../routes/image_uploader');
const express = require("express");
const router = express.Router();

router.get("/new", async (req, res) => {
  res.render("add_tour", { errors: [], tour: {} });
});

router.get("/:id/edit", async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (!tour) {
      return res.status(404).send("Blog not found");
    }
    res.render("edit_tour", { errors: [], tour: tour });
  } catch (err) {
    res.status(500).send("An error occurred while fetching tour");
  }
});

router.get("/", async (req, res) => {
  const tours = await Tour.find().sort("name");
  res.render("tours", { tours });
});

router.get("/:id", async (req, res) => {
  const tour = await Tour.findById(req.params.id);
  if (!tour) {
    return res.status(404).send("the tour is not available");
  }
  res.render("view_tour", { tour });
});


router.post("/", upload.single('cover'), async (req, res) => {
  const { error } = handleTourValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).send(errorMessages);
  }


  let tour = new Tour({
    name: req.body.name,
    desc: req.body.desc,
    date: req.body.date,
    location: req.body.location,
    duration: req.body.duration
  });
  if (req.file) {
    req.body.cover = req.file.path.replace(/\\/g, '/');
    tour.cover = req.file.path;
  }
  try {
    tour = await tour.save();
    res.status(201).send(tour);
  } catch (error) {
    res.status(500).send('An error occurred');
  }
});

router.put("/:id", upload.single('cover'), async (req, res) => {
  const { error } = handleTourValidation(req.body);
  if (error) {
    const errorMessages = error.details.map((err) => err.message);
    return res.status(400).render('edit_blog', { errors: errorMessages, tour: req.body });
  }

  let tour = await Tour.findById(req.params.id);
  if (!tour) return res.status(404).send('the tour with given id is not found');

  const updatedData = {
    name: req.body.name,
    desc: req.body.desc,
    date: req.body.date,
    location: req.body.location,
    duration: req.body.duration
  };
  if (req.file) {
    req.body.cover = req.file.path.replace(/\\/g, '/');
    updatedData.cover = req.file.path;
  }
  tour = await Tour.findByIdAndUpdate(req.params.id, updatedData, { new: true });
  res.status(200).send(tour);
});

router.delete("/:id", async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) {
      return res.status(404).send("The tour is not available");
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send("An error occurred during deletion");
  }
});
module.exports = router;