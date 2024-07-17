const express = require('express');
const router = express.Router();
const LlmAccess = require('../models/LlmAccess');

// @route   GET api/llmaccess
// @desc    Get all LlmAccess entries
router.get('/', async (req, res) => {
  try {
    const llmAccessEntries = await LlmAccess.find();
    res.json(llmAccessEntries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/llmaccess
// @desc    Create a new LlmAccess entry
router.post('/', async (req, res) => {
  const newData = new LlmAccess(req.body);
  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/llmaccess/:id
// @desc    Update LlmAccess entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedData = await LlmAccess.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/llmaccess/:id
// @desc    Delete LlmAccess entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await LlmAccess.findByIdAndDelete(req.params.id);
    res.json({ msg: 'LlmAccess entry removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;