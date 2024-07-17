const express = require('express');
const router = express.Router();
const LlmData = require('../models/LlmData');

// @route   GET api/llmdata
// @desc    Get all LlmData entries
router.get('/', async (req, res) => {
  try {
    const llmDataEntries = await LlmData.find();
    res.json(llmDataEntries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/llmdata
// @desc    Create a new LlmData entry
router.post('/', async (req, res) => {
  const newData = new LlmData(req.body);
  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/llmdata/:id
// @desc    Update LlmData entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedData = await LlmData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/llmdata/:id
// @desc    Delete LlmData entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await LlmData.findByIdAndDelete(req.params.id);
    res.json({ msg: 'LlmData entry removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;