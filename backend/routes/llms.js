const express = require('express');
const router = express.Router();
const Llm = require('../models/Llm');

// @route   GET api/llms
// @desc    Get all LLMs
router.get('/', async (req, res) => {
  try {
    const llms = await Llm.find();
    res.json(llms);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/llms/:id
// @desc    Get LLM by ID
router.get('/:id', async (req, res) => {
  try {
    const llm = await Llm.findById(req.params.id);

    if (!llm) {
      return res.status(404).json({ msg: 'LLM not found' });
    }

    res.json(llm);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'LLM not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   POST api/llms
// @desc    Create a new LLM
router.post('/', async (req, res) => {
  const {
    type_id,
    name,
    organisation_id,
    description,
    date_id,
    url_id,
    datasheet,
    modality_id,
    size_id,
    sample,
    analysis,
    dependencies_id,
    included,
    excluded,
    quality_control,
    access_id,
    license,
    intended_use,
    prohibited_uses,
    monitoring,
    feedback,
    model_type_id,
    training_emissions,
    training_time,
    training_hardware,
    adaptation,
    output_space,
    terms_of_service,
    monthly_active_users,
    user_distribution,
    failures,
  } = req.body;

  try {
    const newLlm = new Llm({
      type_id,
      name,
      organisation_id,
      description,
      date_id,
      url_id,
      datasheet,
      modality_id,
      size_id,
      sample,
      analysis,
      dependencies_id,
      included,
      excluded,
      quality_control,
      access_id,
      license,
      intended_use,
      prohibited_uses,
      monitoring,
      feedback,
      model_type_id,
      training_emissions,
      training_time,
      training_hardware,
      adaptation,
      output_space,
      terms_of_service,
      monthly_active_users,
      user_distribution,
      failures,
    });

    const llm = await newLlm.save();
    res.json(llm);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/llms/:id
// @desc    Update LLM by ID
router.put('/:id', async (req, res) => {
  const {
    type_id,
    name,
    organisation_id,
    description,
    date_id,
    url_id,
    datasheet,
    modality_id,
    size_id,
    sample,
    analysis,
    dependencies_id,
    included,
    excluded,
    quality_control,
    access_id,
    license,
    intended_use,
    prohibited_uses,
    monitoring,
    feedback,
    model_type_id,
    training_emissions,
    training_time,
    training_hardware,
    adaptation,
    output_space,
    terms_of_service,
    monthly_active_users,
    user_distribution,
    failures,
  } = req.body;

  // Build LLM object
  const llmFields = {
    type_id,
    name,
    organisation_id,
    description,
    date_id,
    url_id,
    datasheet,
    modality_id,
    size_id,
    sample,
    analysis,
    dependencies_id,
    included,
    excluded,
    quality_control,
    access_id,
    license,
    intended_use,
    prohibited_uses,
    monitoring,
    feedback,
    model_type_id,
    training_emissions,
    training_time,
    training_hardware,
    adaptation,
    output_space,
    terms_of_service,
    monthly_active_users,
    user_distribution,
    failures,
  };

  try {
    let llm = await Llm.findById(req.params.id);

    if (!llm) return res.status(404).json({ msg: 'LLM not found' });

    llm = await Llm.findByIdAndUpdate(
      req.params.id,
      { $set: llmFields },
      { new: true }
    );

    res.json(llm);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'LLM not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/llms/:id
// @desc    Delete LLM by ID
router.delete('/:id', async (req, res) => {
  try {
    const llm = await Llm.findById(req.params.id);

    if (!llm) {
      return res.status(404).json({ msg: 'LLM not found' });
    }

    await llm.remove();

    res.json({ msg: 'LLM removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'LLM not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;