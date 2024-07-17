const express = require('express');
const router = express.Router();
const LlmAnalysis = require('../models/LlmAnalysis');

// @route   GET api/llmanalysis
// @desc    Get all LlmAnalysis entries
router.get('/', async (req, res) => {
  try {
    const llmAnalysisEntries = await LlmAnalysis.find();
    res.json(llmAnalysisEntries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/llmanalysis
// @desc    Create a new LlmAnalysis entry
router.post('/', async (req, res) => {
  const newData = new LlmAnalysis(req.body);
  try {
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/llmanalysis/:id
// @desc    Update LlmAnalysis entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedData = await LlmAnalysis.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/llmanalysis/:id
// @desc    Delete LlmAnalysis entry by ID
router.delete('/:id', async (req, res) => {
  try {
    await LlmAnalysis.findByIdAndDelete(req.params.id);
    res.json({ msg: 'LlmAnalysis entry removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;