const express = require('express');
const router = express.Router();
const LlmDependencies = require('../models/LlmDependencies');

// @route   GET api/llmdependencies
// @desc    Get all LlmDependencies entries
router.get('/', async (req, res) => {
  try {
    const llmDependenciesEntries = await LlmDependencies.find();
    res.json(llmDependenciesEntries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/llmdependencies
// @desc    Create a new LlmDependencies entry
router.post('/', async (req, res) => {
  const newData = new LlmDependencies(req.body);
  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/llmdependencies/:id
// @desc    Update LlmDependencies entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedData = await LlmDependencies.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/llmdependencies/:id
// @desc    Delete LlmDependencies entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await LlmDependencies.findByIdAndDelete(req.params.id);
    res.json({ msg: 'LlmDependencies entry removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;