import Llm from '../models/Llm.js';

export default class LlmController {
  getAllLlms = async (req, res) => {
    try {
      const llms = await Llm.find({})
        .populate({
          path: 'organization',
          model: 'llm_organization',
        })
        .populate('type_id');
        // .populate('modality_id')
        // .populate('size_id')
        // .populate('dependencies_id')
        // .populate('access_id')
        // .populate('model_type_id')
        // .populate('training_emissions_id')
        // .populate('training_time_id')
        // .populate('training_hardware_id')
        // .populate('output_space_id')
        // .populate('url_id')
        // .populate('description_id')
        // .populate('analysis_id')
        // .populate('license_id')
        // .populate('intended_use_id')
        // .populate('prohibited_uses_id')
        // .populate('monitoring_id')
        // .populate('feedback_id')
        // .populate('quality_control_id')
        // .populate('terms_of_service_id')
        // .populate('monthly_active_users_id')
        // .populate('user_distribution_id')
        // .populate('failures_id')
        // .populate('created_date_id')
        // .populate('model_card_id');
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