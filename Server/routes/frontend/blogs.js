const express = require('express');
const { Blog } = require('../../models/blogs');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find(); 
    res.status(200).json(blogs);  
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const blogs = await Blog.findById(req.params.id); 
    if (!blogs) {
      return res.status(404).json({ error: 'Tour not found' }); 
    }
    res.status(200).json(blogs);  
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});
module.exports = router;
