import Llm from '../models/Llm.js';

export default class LlmController {
  // #service;

  // constructor(service = new LlmService()) {
  //   this.#service = service;
  // }

  getAllLlms = async (req, res) => {
    try {
      const llms = await Llm.find({});
      return res.status(200).json(llms);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  };

  getLlm = async (req, res) => {
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
  };

  addLlm = async (req, res) => {
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
  };

  updateLlm = async (req, res) => {
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
  };

  deleteLlm = async (req, res) => {
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
  };
}