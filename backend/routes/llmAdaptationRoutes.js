const express = require('express');
const router = express.Router();
const LlmAdaptation = require('../models/LlmAdaptation');

// @route   GET api/llmadaptation
// @desc    Get all LlmAdaptation entries
router.get('/', async (req, res) => {
  try {
    const llmAdaptationEntries = await LlmAdaptation.find();
    res.json(llmAdaptationEntries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/llmadaptation
// @desc    Create a new LlmAdaptation entry
router.post('/', async (req, res) => {
  const newData = new LlmAdaptation(req.body);
  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/llmadaptation/:id
// @desc    Update LlmAdaptation entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedData = await LlmAdaptation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/llmadaptation/:id
// @desc    Delete LlmAdaptation entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await LlmAdaptation.findByIdAndDelete(req.params.id);
    res.json({ msg: 'LlmAdaptation entry removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;