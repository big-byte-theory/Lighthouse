import Llm from '../models/Llm.js';
import LlmAccess from '../models/LlmAccess.js';
import LlmAnalysis from '../models/LlmAnalysis.js';
import LlmCreatedDate from '../models/LlmCreatedDate.js';
import LlmDatasheet from '../models/LlmDatasheet.js';
import LlmDependencies from '../models/LlmDependencies.js';
import LlmDescription from '../models/LlmDescription.js';
import LlmExcluded from '../models/LlmExclusion.js';
import LlmFailure from '../models/LlmFailure.js';
import LlmFeedback from '../models/LlmFeedback.js';
import LlmLicense from '../models/LlmLicense.js';
import LlmIntendedUse from '../models/LlmIntendedUse.js';
import LlmProhibitedUse from '../models/LlmProhibitedUse.js';
import LlmMonitoring from '../models/LlmMonitoring.js';
import LlmModelCard from '../models/LlmModelCard.js';
import LlmModality from '../models/LlmModality.js';
import LlmMonthlyActiveUser from '../models/LlmMonthlyActiveUser.js';
import LlmNews from '../models/LlmNews.js';
import LlmTrainingEmission from '../models/LlmTrainingEmission.js';
import LlmTrainingTime from '../models/LlmTrainingTime.js';
import LlmTrainingHardware from '../models/LlmTrainingHardware.js';
import LlmOrganization from '../models/LlmOrganization.js';
import LlmOutputSpace from '../models/LlmOutputSpace.js';
import LlmQualityControl from '../models/LlmQualityControl.js';
import LlmSize from '../models/LlmSize.js';
import LlmTermsOfService from '../models/LlmTermsOfService.js';
import LlmType from '../models/LlmType.js';
import LlmUrl from '../models/LlmUrl.js';
import LlmUserDistribution from '../models/LlmUserDistribution.js';

export default class LlmController {
  getAllLlms = async (req, res) => {
    try {
      const llms = await Llm.find()
        .populate({
          path: 'organization_id',
          model: LlmOrganization,
          select: 'organization'
        })
        .populate({
          path: 'type_id',
          model: LlmType,
          select: 'type'
        })
        .populate({
          path: 'created_date',
          model: LlmCreatedDate,
          select: 'created_date'
        })
        .populate({
          path: 'modality_id',
          model: LlmModality,
          select: 'modality'
        })
        .populate({
          path: 'size_id',
          model: LlmSize,
          select: 'size'
        })
        .populate({
          path: 'access_id',
          model: LlmAccess,
          select: 'access'
        })
        .populate({
          path: 'dependencies_id',
          model: LlmDependencies,
          populate: ({
            path: 'dependencies_llm_ids',
            model: Llm,
            select: 'llm_data_id'
          })
        })
        .populate({
          path: 'training_emissions_id',
          model: LlmTrainingEmission,
          select: 'training_emissions'
        })
        .populate({
          path: 'training_time_id',
          model: LlmTrainingTime,
          select: 'training_time'
        })
        .populate({
          path: 'training_hardware_id',
          model: LlmTrainingHardware,
          select: 'training_hardware'
        })
        .populate({
          path: 'output_space_id',
          model: LlmOutputSpace,
          select: 'output_space'
        })
        .populate({
          path: 'url_id',
          model: LlmUrl,
          select: 'url'
        })
        .populate({
          path: 'description_id',
          model: LlmDescription,
          select: 'description'
        })
        .populate({
          path: 'analysis_id',
          model: LlmAnalysis,
          select: 'analysis'
        })
        .populate({
          path: 'license_id',
          model: LlmLicense,
          select: 'license'
        })
        .populate({
          path: 'intended_uses_id',
          model: LlmIntendedUse,
        })
        .populate({
          path: 'prohibited_uses_id',
          model: LlmProhibitedUse,
          select: 'prohibited_uses'
        })
        .populate({
          path: 'monitoring_id',
          model: LlmMonitoring,
          select: 'monitoring'
        })
        .populate({
          path: 'feedback_id',
          model: LlmFeedback,
          select: 'feedback'
        })
        .populate({
          path: 'quality_control_id',
          model: LlmQualityControl,
          select: 'quality_control'
        })
        .populate({
          path: 'terms_of_service_id',
          model: LlmTermsOfService,
          select: 'terms_of_service'
        })
        .populate({
          path: 'monthly_active_users_id',
          model: LlmMonthlyActiveUser,
          select: 'monthly_active_users'
        })
        .populate({
          path: 'user_distribution_id',
          model: LlmUserDistribution,
          select: 'user_distribution'
        })
        .populate({
          path: 'failures_id',
          model: LlmFailure,
          select: 'failures'
        })
        .populate({
          path: 'created_date_id',
          model: LlmCreatedDate,
          select: 'created_date'
        })
        .populate({
          path: 'model_card_id',
          model: LlmModelCard,
          select: 'model_card'
        })
        .populate({
          path: 'news_ids',
          model: LlmNews,
          select: 'articles'
        })
        .exec();
      return res.status(200).json(llms);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  };

  getLlm = async (req, res) => {
    try {
      const llm = await Llm.findById(req.params.id)
        .populate({
          path: 'organization_id',
          model: LlmOrganization,
          select: 'organization'
        })
        .populate({
          path: 'type_id',
          model: LlmType,
          select: 'type'
        })
        .populate({
          path: 'created_date',
          model: LlmCreatedDate,
          select: 'created_date'
        })
        .populate({
          path: 'modality_id',
          model: LlmModality,
          select: 'modality'
        })
        .populate({
          path: 'size_id',
          model: LlmSize,
          select: 'size'
        })
        .populate({
          path: 'access_id',
          model: LlmAccess,
          select: 'access'
        })
        .populate({
          path: 'dependencies_id',
          model: LlmDependencies,
          populate: ({
            path: 'dependencies_llm_ids',
            model: Llm,
            select: 'llm_data_id'
          })
        })
        .populate({
          path: 'training_emissions_id',
          model: LlmTrainingEmission,
          select: 'training_emissions'
        })
        .populate({
          path: 'training_time_id',
          model: LlmTrainingTime,
          select: 'training_time'
        })
        .populate({
          path: 'training_hardware_id',
          model: LlmTrainingHardware,
          select: 'training_hardware'
        })
        .populate({
          path: 'output_space_id',
          model: LlmOutputSpace,
          select: 'output_space'
        })
        .populate({
          path: 'url_id',
          model: LlmUrl,
          select: 'url'
        })
        .populate({
          path: 'description_id',
          model: LlmDescription,
          select: 'description'
        })
        .populate({
          path: 'analysis_id',
          model: LlmAnalysis,
          select: 'analysis'
        })
        .populate({
          path: 'license_id',
          model: LlmLicense,
          select: 'license'
        })
        .populate({
          path: 'intended_uses_id',
          model: LlmIntendedUse,
        })
        .populate({
          path: 'prohibited_uses_id',
          model: LlmProhibitedUse,
          select: 'prohibited_uses'
        })
        .populate({
          path: 'monitoring_id',
          model: LlmMonitoring,
          select: 'monitoring'
        })
        .populate({
          path: 'feedback_id',
          model: LlmFeedback,
          select: 'feedback'
        })
        .populate({
          path: 'quality_control_id',
          model: LlmQualityControl,
          select: 'quality_control'
        })
        .populate({
          path: 'terms_of_service_id',
          model: LlmTermsOfService,
          select: 'terms_of_service'
        })
        .populate({
          path: 'monthly_active_users_id',
          model: LlmMonthlyActiveUser,
          select: 'monthly_active_users'
        })
        .populate({
          path: 'user_distribution_id',
          model: LlmUserDistribution,
          select: 'user_distribution'
        })
        .populate({
          path: 'failures_id',
          model: LlmFailure,
          select: 'failures'
        })
        .populate({
          path: 'created_date_id',
          model: LlmCreatedDate,
          select: 'created_date'
        })
        .populate({
          path: 'model_card_id',
          model: LlmModelCard,
          select: 'model_card'
        })
        .populate({
          path: 'news_ids',
          model: LlmNews,
        })
        .exec();

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
      prohibited_use,
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
        prohibited_use,
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
      prohibited_use,
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
      prohibited_use,
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