const express = require('express');
const router = express.Router();
const LlmDatasheet = require('../models/LlmDatasheet');

// @route   GET api/llmdatasheet
// @desc    Get all LlmDatasheet entries
router.get('/', async (req, res) => {
  try {
    const llmDatasheetEntries = await LlmDatasheet.find();
    res.json(llmDatasheetEntries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/llmdatasheet
// @desc    Create a new LlmDatasheet entry
router.post('/', async (req, res) => {
  const newData = new LlmDatasheet(req.body);
  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/llmdatasheet/:id
// @desc    Update LlmDatasheet entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedData = await LlmDatasheet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/llmdatasheet/:id
// @desc    Delete LlmDatasheet entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await LlmDatasheet.findByIdAndDelete(req.params.id);
    res.json({ msg: 'LlmDatasheet entry removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;