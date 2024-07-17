const express = require('express');
const router = express.Router();
const LlmCreatedDate = require('../models/LlmCreatedDate');

// @route   GET api/llmcreateddate
// @desc    Get all LlmCreatedDate entries
router.get('/', async (req, res) => {
  try {
    const llmCreatedDateEntries = await LlmCreatedDate.find();
    res.json(llmCreatedDateEntries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/llmcreateddate
// @desc    Create a new LlmCreatedDate entry
router.post('/', async (req, res) => {
  const newData = new LlmCreatedDate(req.body);
  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/llmcreateddate/:id
// @desc    Update LlmCreatedDate entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedData = await LlmCreatedDate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/llmcreateddate/:id
// @desc    Delete LlmCreatedDate entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await LlmCreatedDate.findByIdAndDelete(req.params.id);
    res.json({ msg: 'LlmCreatedDate entry removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;