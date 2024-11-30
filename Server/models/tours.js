const Joi = require('joi');
const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
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
  date: { type: Date, default: Date.now },
  location: {
    type: String
  },
  duration: {
    type: String
  }
});
const Tour = mongoose.model("Tour", tourSchema);

function handleTourValidation(tour) {
  const schema = Joi.object({
    name: Joi.string().min(5).required(),
    desc: Joi.string().min(15).required(),
    location: Joi.string().min(15).required(),
    duration: Joi.string().min(15).required(),
  });
  return schema.validate(tour, { abortEarly: false });
}

exports.Tour = Tour;
exports.handleTourValidation = handleTourValidation;