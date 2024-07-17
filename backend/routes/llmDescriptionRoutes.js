const express = require('express');
const router = express.Router();
const LlmDescription = require('../models/LlmDescription');

// @route   GET api/llmdescription
// @desc    Get all LlmDescription entries
router.get('/', async (req, res) => {
  try {
    const llmDescriptionEntries = await LlmDescription.find();
    res.json(llmDescriptionEntries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/llmdescription
// @desc    Create a new LlmDescription entry
router.post('/', async (req, res) => {
  const newData = new LlmDescription(req.body);
  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/llmdescription/:id
// @desc    Update LlmDescription entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedData = await LlmDescription.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/llmdescription/:id
// @desc    Delete LlmDescription entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await LlmDescription.findByIdAndDelete(req.params.id);
    res.json({ msg: 'LlmDescription entry removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;