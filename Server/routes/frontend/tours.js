const express = require('express');
const { Tour } = require('../../models/tours');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tours' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tours = await Tour.findById(req.params.id);
    if (!tours) {
      return res.status(404).json({ error: 'Tour not found' });
    }
    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tours' });
  }
});
module.exports = router;
