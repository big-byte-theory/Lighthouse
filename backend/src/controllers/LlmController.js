import mongoose from 'mongoose';
import Llm from '../models/Llm.js';
import LlmAccess from '../models/LlmAccess.js';
import LlmAdaptation from '../models/LlmAdaptation.js';
import LlmAnalysis from '../models/LlmAnalysis.js';
import LlmCreatedDate from '../models/LlmCreatedDate.js';
import LlmDatasheet from '../models/LlmDatasheet.js';
import LlmDependencies from '../models/LlmDependencies.js';
import LlmDescription from '../models/LlmDescription.js';
import LlmExcluded from '../models/LlmExclusion.js';
import LlmFailure from '../models/LlmFailure.js';
import LlmFeedback from '../models/LlmFeedback.js';
import LlmIncluded from '../models/LlmInclude.js';
import LlmIntendedUse from '../models/LlmIntendedUse.js';
import LlmLicense from '../models/LlmLicense.js';
import LlmMonitoring from '../models/LlmMonitoring.js';
import LlmModelCard from '../models/LlmModelCard.js';
import LlmModality from '../models/LlmModality.js';
import LlmMonthlyActiveUser from '../models/LlmMonthlyActiveUser.js';
import LlmNews from '../models/LlmNews.js';
import LlmOrganization from '../models/LlmOrganization.js';
import LlmOutputSpace from '../models/LlmOutputSpace.js';
import LlmProhibitedUse from '../models/LlmProhibitedUse.js';
import LlmQualityControl from '../models/LlmQualityControl.js';
import LlmSample from '../models/LlmSample.js';
import LlmSize from '../models/LlmSize.js';
import LlmTrainingEmission from '../models/LlmTrainingEmission.js';
import LlmTrainingTime from '../models/LlmTrainingTime.js';
import LlmTrainingHardware from '../models/LlmTrainingHardware.js';
import LlmTermsOfService from '../models/LlmTermsOfService.js';
import LlmType from '../models/LlmType.js';
import LlmUrl from '../models/LlmUrl.js';
import LlmUserDistribution from '../models/LlmUserDistribution.js';

mongoose.set('useFindAndModify', false);

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
          populate: {
            path: 'dependencies_llm_ids',
            model: Llm,
            select: 'llm_data_id'
          }
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
      return res.status(500).json({ msg: 'Server Error' });
    }
  };

  getLlm = async (req, res) => {
    try {
      const llm = await Llm.find({ llm_data_id: req.params.id })
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
          populate: {
            path: 'dependencies_llm_ids',
            model: Llm,
            select: 'llm_data_id'
          }
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

      return res.status(200).json(llm);
    } catch (err) {
      console.error(err.message);
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'LLM not found' });
      }
      res.status(500).json({msg: 'Server Error'});
    }
  };

  getLlmCount = async (req, res) => {
    try {
      const count = await Llm.countDocuments();
      return count;
    } catch (err) {
      console.error(err.message);
      res.status(500).json({msg: 'Server Error'});
    }
  };

  addLlm = async (req, res) => {
    let {
      type,
      name,
      organization,
      description,
      created_date,
      url,
      datasheet,
      modality,
      size,
      sample,
      analysis,
      dependencies,
      included,
      excluded,
      quality_control,
      access,
      license,
      intended_uses,
      prohibited_uses,
      monitoring,
      feedback,
      model_type,
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

    const count = await this.getLlmCount();
    const llm_data = count + 1;

    const fields = [
      'type',
      'organization',
      'description',
      'created_date',
      'url',
      'datasheet',
      'modality',
      'size',
      'sample',
      'analysis',
      'dependencies',
      'included',
      'excluded',
      'quality_control',
      'access',
      'license',
      'intended_uses',
      'prohibited_uses',
      'monitoring',
      'feedback',
      'model_type',
      'training_emissions',
      'training_time',
      'training_hardware',
      'adaptation',
      'output_space',
      'terms_of_service',
      'monthly_active_users',
      'user_distribution',
      'failures',
    ];

    const data = {
      'type': type,
      'organization': organization,
      'description': description,
      'created_date': new Date(created_date).toISOString(),
      'url': url,
      'datasheet': datasheet,
      'modality': modality,
      'size': size,
      'sample': sample,
      'analysis': analysis,
      'dependencies': dependencies,
      'included': included,
      'excluded': excluded,
      'quality_control': quality_control,
      'access': access,
      'license': license,
      'intended_uses': intended_uses,
      'prohibited_uses': prohibited_uses,
      'monitoring': monitoring,
      'feedback': feedback,
      'model_type': model_type,
      'training_emissions': training_emissions,
      'training_time': training_time,
      'training_hardware': training_hardware,
      'adaptation': adaptation,
      'output_space': output_space,
      'terms_of_service': terms_of_service,
      'monthly_active_users': monthly_active_users,
      'user_distribution': user_distribution,
      'failures': failures,
    };

    this.unknownData(fields, data);

    const translatedField = await this.translateField(
      data.type,
      data.organization,
      data.description,
      data.created_date,
      data.url,
      data.datasheet,
      data.modality,
      data.size,
      data.sample,
      data.analysis,
      data.dependencies,
      data.included,
      data.excluded,
      data.quality_control,
      data.access,
      data.license,
      data.intended_uses,
      data.prohibited_uses,
      data.monitoring,
      data.feedback,
      data.model_type,
      data.training_emissions,
      data.training_time,
      data.training_hardware,
      data.adaptation,
      data.output_space,
      data.terms_of_service,
      data.monthly_active_users,
      data.user_distribution,
      data.failures,
    );

    try {
      const newLlm = new Llm({
        type_id: translatedField.type_id,
        name: name,
        llm_data_id: Number(llm_data),
        organization_id: translatedField.organization_id,
        description_id: translatedField.description_id,
        created_date_id: translatedField.created_date_id,
        url_id: translatedField.url_id,
        datasheet_id: translatedField.datasheet_id,
        modality_id: translatedField.modality_id,
        size_id: translatedField.size_id,
        sample_id: translatedField.sample_id,
        analysis_id: translatedField.analysis_id,
        dependencies_id: translatedField.dependencies_id,
        included_id: translatedField.included_id,
        excluded_id: translatedField.excluded_id,
        quality_control_id: translatedField.quality_control_id,
        access_id: translatedField.access_id,
        license_id: translatedField.license_id,
        intended_uses_id: translatedField.intended_uses_id,
        prohibited_uses_id: translatedField.prohibited_uses_id,
        monitoring_id: translatedField.monitoring_id,
        feedback_id: translatedField.feedback_id,
        model_type_id: translatedField.model_type_id,
        training_emissions_id: translatedField.training_emissions_id,
        training_time_id: translatedField.training_time_id,
        training_hardware_id: translatedField.training_hardware_id,
        adaptation_id: translatedField.adaptation_id,
        output_space_id: translatedField.output_space_id,
        sample_id: translatedField.sample_id,
        terms_of_service_id: translatedField.terms_of_service_id,
        monthly_active_users_id: translatedField.monthly_active_users_id,
        user_distribution_id: translatedField.user_distribution_id,
        failures_id: translatedField.failures_id,
      });
      
      const llm = await newLlm.save();
      return res.status(201).json({
        status: 201,
        msg: "LLM added successfully",
        llm
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({msg: 'Server Error'});
    }
  };

  unknownData = (fields, data) => {
    // Check if fields are empty and set to 'unknown'
    fields.forEach(field => {
      if (!data[field] || data[field].trim() === '') {
        data[field] = 'unknown';
      }
    });
    return fields;
  };

  translateField = async (
    type,
    organization,
    description,
    created_date,
    url,
    datasheet,
    modality,
    size,
    sample,
    analysis,
    dependencies,
    included,
    excluded,
    quality_control,
    access,
    license,
    intended_uses,
    prohibited_uses,
    monitoring,
    feedback,
    model_type,
    training_emissions,
    training_time,
    training_hardware,
    adaptation,
    output_space,
    terms_of_service,
    monthly_active_users,
    user_distribution,
    failures,
  ) => { 
    const type_id = await LlmType.findOne({ type: type });
    const organization_id = await LlmOrganization.findOneAndUpdate(
      { organization: organization },
      { $setOnInsert: { organization: organization } },
      { upsert: true, returnDocument: 'after' }
    );

    const description_id = await LlmDescription.findOneAndUpdate(
      { description: description },
      { $setOnInsert: { description: description } },
      { upsert: true, returnDocument: 'after' }
    );
    
    const date_id = await LlmCreatedDate.findOneAndUpdate(
      { created_date: created_date },
      { $setOnInsert: { created_date: created_date } },
      { upsert: true, returnDocument: 'after' }
    );
    const url_id = await LlmUrl.findOneAndUpdate(
      { url: url },
      { $setOnInsert: { url: url } },
      { upsert: true, returnDocument: 'after' }
    );

    const datasheet_id = await LlmDatasheet.findOneAndUpdate(
      { datasheet: datasheet },
      { $setOnInsert: { datasheet: datasheet } },
      { upsert: true, returnDocument: 'after' }
    );

    const modality_id = await LlmModality.findOneAndUpdate(
      { modality: modality },
      { $setOnInsert: { modality: modality } },
      { upsert: true, returnDocument: 'after' }
    );

    const size_id = await LlmSize.findOneAndUpdate(
      { size: size },
      { $setOnInsert: { size: size } },
      { upsert: true, returnDocument: 'after' }
    );

    const analysis_id = await LlmAnalysis.findOneAndUpdate(
      { analysis: analysis },
      { $setOnInsert: { analysis: analysis } },
      { upsert: true, returnDocument: 'after' }
    );

    const dependencies_id = await LlmDependencies.findOneAndUpdate(
      { dependencies: dependencies },
      { $setOnInsert: { dependencies: dependencies } },
      { upsert: true, returnDocument: 'after' }
    );
    const included_id = await LlmIncluded.findOneAndUpdate(
      { included: included },
      { $setOnInsert: { included: included } },
      { upsert: true, returnDocument: 'after' }
    );

    const excluded_id = await LlmExcluded.findOneAndUpdate(
      { excluded: excluded },
      { $setOnInsert: { excluded: excluded } },
      { upsert: true, returnDocument: 'after' }
    );

    const quality_control_id = await LlmQualityControl.findOneAndUpdate(
      { quality_control: quality_control },
      { $setOnInsert: { quality_control: quality_control } },
      { upsert: true, returnDocument: 'after' }
    );
    const access_id = await LlmAccess.findOne({ access: access });

    const license_id = await LlmLicense.findOneAndUpdate(
      { license: license },
      { $setOnInsert: { license: license } },
      { upsert: true, returnDocument: 'after' }
    );

    const intended_uses_id = await LlmIntendedUse.findOneAndUpdate(
      { intended_uses: intended_uses },
      { $setOnInsert: { intended_uses: intended_uses } },
      { upsert: true, returnDocument: 'after' }
    );

    const prohibited_uses_id = await LlmProhibitedUse.findOneAndUpdate(
      { prohibited_uses: prohibited_uses },
      { $setOnInsert: { prohibited_uses: prohibited_uses } },
      { upsert: true, returnDocument: 'after' }
    );

    const monitoring_id = await LlmMonitoring.findOneAndUpdate(
      { monitoring: monitoring },
      { $setOnInsert: { monitoring: monitoring } },
      { upsert: true, returnDocument: 'after' }
    );

    const feedback_id = await LlmFeedback.findOneAndUpdate(
      { feedback: feedback },
      { $setOnInsert: { feedback: feedback } },
      { upsert: true, returnDocument: 'after' }
    );

    const model_type_id = await LlmModelCard.findOneAndUpdate(
      { model_card: model_type },
      { $setOnInsert: { model_card: model_type } },
      { upsert: true, returnDocument: 'after' }
    );

    const sample_id = await LlmSample.findOneAndUpdate(
      { sample: sample },
      { $setOnInsert: { sample: sample } },
      { upsert: true, returnDocument: 'after' }
    );

    const training_emissions_id = await LlmTrainingEmission.findOneAndUpdate(
      { training_emissions: training_emissions },
      { $setOnInsert: { training_emissions: training_emissions } },
      { upsert: true, returnDocument: 'after' }
    );

    const training_time_id = await LlmTrainingTime.findOneAndUpdate( 
      { training_time: training_time },
      { $setOnInsert: { training_time: training_time } },
      { upsert: true, returnDocument: 'after' }
    );

    const training_hardware_id = await LlmTrainingHardware.findOneAndUpdate(
      { training_hardware: training_hardware },
      { $setOnInsert: { training_hardware: training_hardware } },
      { upsert: true, returnDocument: 'after' }
    );

    const adaptation_id = await LlmAdaptation.findOneAndUpdate(
      { adaptation: adaptation },
      { $setOnInsert: { adaptation: adaptation } },
      { upsert: true, returnDocument: 'after' }
    );

    const output_space_id = await LlmOutputSpace.findOneAndUpdate(
      { output_space: output_space },
      { $setOnInsert: { output_space: output_space } },
      { upsert: true, returnDocument: 'after' }
    );

    const terms_of_service_id = await LlmTermsOfService.findOneAndUpdate(
      { terms_of_service: terms_of_service },
      { $setOnInsert: { terms_of_service: terms_of_service } },
      { upsert: true, returnDocument: 'after' }
    );

    const monthly_active_users_id = await LlmMonthlyActiveUser.findOneAndUpdate(
      { monthly_active_users: monthly_active_users },
      { $setOnInsert: { monthly_active_users: monthly_active_users } },
      { upsert: true, returnDocument: 'after' }
    );

    const user_distribution_id = await LlmUserDistribution.findOneAndUpdate(
      { user_distribution: user_distribution },
      { $setOnInsert: { user_distribution: user_distribution } },
      { upsert: true, returnDocument: 'after' }
    );

    const failures_id = await LlmFailure.findOneAndUpdate(
      { failures: failures },
      { $setOnInsert: { failures: failures } },
      { upsert: true, returnDocument: 'after' }
    );

    const updatedLlm = {
      type_id: type_id,
      organization_id: organization_id,
      description_id: description_id,
      created_date_id: date_id,
      url_id: url_id,
      datasheet_id: datasheet_id,
      modality_id: modality_id,
      size_id: size_id,
      sample_id: sample_id,
      analysis_id: analysis_id,
      dependencies_id: dependencies_id,
      included_id: included_id,
      excluded_id: excluded_id,
      quality_control_id: quality_control_id,
      access_id: access_id,
      license_id: license_id,
      intended_uses_id: intended_uses_id,
      prohibited_uses_id: prohibited_uses_id,
      monitoring_id: monitoring_id,
      feedback_id: feedback_id,
      model_type_id: model_type_id,
      training_emissions_id: training_emissions_id,
      training_time_id: training_time_id,
      training_hardware_id: training_hardware_id,
      adaptation_id: adaptation_id,
      output_space_id: output_space_id,
      terms_of_service_id: terms_of_service_id,
      monthly_active_users_id: monthly_active_users_id,
      user_distribution_id: user_distribution_id,
      failures_id: failures_id,
    };
    return updatedLlm;
  };

  // updateLlm = async (req, res) => {
  //   const {
  //     type_id,
  //     name,
  //     organization_id,
  //     description_id,
  //     date_id,
  //     url_id,
  //     datasheet_id,
  //     modality_id,
  //     size_id,
  //     sample_id,
  //     analysis_id,
  //     dependencies_id,
  //     included_id,
  //     excluded_id,
  //     quality_control_id,
  //     access_id,
  //     license_id,
  //     intended_uses_id,
  //     prohibited_uses_id,
  //     monitoring_id,
  //     feedback_id,
  //     model_type_id,
  //     training_emissions_id,
  //     training_time_id,
  //     training_hardware_id,
  //     adaptation_id,
  //     output_space_id,
  //     terms_of_service_id,
  //     monthly_active_users_id,
  //     user_distribution_id,
  //     failures_id,
  //   } = req.body;

  //   // Build LLM object
  //   const llmFields = {
  //     type_id,
  //     name,
  //     organization_id,
  //     description,
  //     date_id,
  //     url_id,
  //     datasheet,
  //     modality_id,
  //     size_id,
  //     sample,
  //     analysis,
  //     dependencies_id,
  //     included,
  //     excluded,
  //     quality_control_id,
  //     access_id,
  //     license,
  //     intended_use,
  //     prohibited_use,
  //     monitoring_id,
  //     feedback,
  //     model_type_id,
  //     training_emissions,
  //     training_time,
  //     training_hardware,
  //     adaptation,
  //     output_space,
  //     terms_of_service,
  //     monthly_active_users,
  //     user_distribution,
  //     failures,
  //   };

  //   try {
  //     let llm = await Llm.findById(req.params.id);

  //     if (!llm) return res.status(404).json({ msg: 'LLM not found' });

  //     llm = await Llm.findByIdAndUpdate(
  //       req.params.id,
  //       { $set: llmFields },
  //       { new: true }
  //     );

  //     res.json(llm);
  //   } catch (err) {
  //     console.error(err.message);
  //     if (err.kind === 'ObjectId') {
  //       return res.status(404).json({ msg: 'LLM not found' });
  //     }
  //     res.status(500).json({msg: 'Server Error'});
  //   }
  // };

  // archiveLlm = async (req, res) => {
  //   try {
  //     let llm = await Llm.findById(req.params.id);

  //     if (!llm) return res.status(404).json({ msg: 'LLM not found' });

  //     llm = await Llm.findByIdAndUpdate(
  //       req.params.id,
  //       { $set: { isArchived: true } },
  //       { new: true }
  //     );

  //     res.json(llm);
  //   } catch (err) {
  //     console.error(err.message);
  //     if (err.kind === 'ObjectId') {
  //       return res.status(404).json({ msg: 'LLM not found' });
  //     }
  //     res.status(500).json({msg: 'Server Error'});
  //   };
  // };

  // unarchiveLlm = async (res, req) => {
  //   try {
  //     let llm = await Llm.findById(req.params.id);

  //     if (!llm) return res.status(404).json({ msg: 'LLM not found' });

  //     llm = await Llm.findByIdAndUpdate(
  //       req.params.id,
  //       { $set: { isArchived: false } },
  //       { new: true }
  //     );

  //     res.json(llm);
  //   } catch (err) {
  //     console.error(err.message);
  //     if (err.kind === 'ObjectId') {
  //       return res.status(404).json({ msg: 'LLM not found' });
  //     }
  //     res.status(500).json({msg: 'Server Error'});
  //   };

  //   deleteLlm = async (req, res) => {
  //     try {
  //       const llm = await Llm.findById(req.params.id);

  //       if (!llm) {
  //         return res.status(404).json({ msg: 'LLM not found' });
  //       }

  //       await llm.remove();

  //       res.json({ msg: 'LLM removed' });
  //     } catch (err) {
  //       console.error(err.message);
  //       if (err.kind === 'ObjectId') {
  //         return res.status(404).json({ msg: 'LLM not found' });
  //       }
  //       res.status(500).json({msg: 'Server Error'});
  //     }
  //   };
  // }

  deleteLlm = async (req, res) => {
    try {
      const llm = await Llm.findOne({ llm_data_id: req.params.id })

      if (!llm) {
        return res.status(404).json({ msg: 'LLM not found' });
      }

      try {
        await this.deleteIfUnique(LlmDescription, 'description_id', llm.description_id);
        await this.deleteIfUnique(LlmOrganization, 'organization_id', llm.organization_id);
        await this.deleteIfUnique(LlmCreatedDate, 'created_date_id', llm.created_date_id);
        await this.deleteIfUnique(LlmUrl, 'url_id', llm.url_id);
        await this.deleteIfUnique(LlmDatasheet, 'datasheet_id', llm.datasheet_id);
        await this.deleteIfUnique(LlmModality, 'modality_id', llm.modality_id);
        await this.deleteIfUnique(LlmSize, 'size_id', llm.size_id);
        await this.deleteIfUnique(LlmSample, 'sample_id', llm.sample_id);
        await this.deleteIfUnique(LlmAnalysis, 'analysis_id', llm.analysis_id);
        await this.deleteIfUnique(LlmDependencies, 'dependencies_id', llm.dependencies_id);
        await this.deleteIfUnique(LlmIncluded, 'included_id', llm.included_id);
        await this.deleteIfUnique(LlmExcluded, 'excluded_id', llm.excluded_id);
        await this.deleteIfUnique(LlmQualityControl, 'quality_control_id', llm.quality_control_id);
        await this.deleteIfUnique(LlmAccess, 'access_id', llm.access_id);
        await this.deleteIfUnique(LlmLicense, 'license_id', llm.license_id);
        await this.deleteIfUnique(LlmIntendedUse, 'intended_uses_id', llm.intended_uses_id);
        await this.deleteIfUnique(LlmProhibitedUse, 'prohibited_uses_id', llm.prohibited_uses_id);
        await this.deleteIfUnique(LlmMonitoring, 'monitoring_id', llm.monitoring_id);
        await this.deleteIfUnique(LlmFeedback, 'feedback_id', llm.feedback_id);
        await this.deleteIfUnique(LlmModelCard, 'model_type_id', llm.model_type_id);
        await this.deleteIfUnique(LlmTrainingEmission, 'training_emissions_id', llm.training_emissions_id);
        await this.deleteIfUnique(LlmTrainingTime, 'training_time_id', llm.training_time_id);
        await this.deleteIfUnique(LlmTrainingHardware, 'training_hardware_id', llm.training_hardware_id);
        await this.deleteIfUnique(LlmAdaptation, 'adaptation_id', llm.adaptation_id);
        await this.deleteIfUnique(LlmOutputSpace, 'output_space_id', llm.output_space_id);
        await this.deleteIfUnique(LlmTermsOfService, 'terms_of_service_id', llm.terms_of_service_id);
        await this.deleteIfUnique(LlmMonthlyActiveUser, 'monthly_active_users_id', llm.monthly_active_users_id);
        await this.deleteIfUnique(LlmUserDistribution, 'user_distribution_id', llm.user_distribution_id);
        await this.deleteIfUnique(LlmFailure, 'failures_id', llm.failures_id);
      } catch (error) {
        return res.status(500).json(error.message);
      }

      await llm.deleteOne();
      return res.status(200).json({ msg: 'LLM removed' });
    } catch (err) {
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'LLM not found' });
      }
      res.status(500).json({msg: 'Server Error'});
    };
  };

  deleteIfUnique = async (llmModel, llmField, llmFieldId) => {
    console.log(llmField, llmFieldId);
    const relatedDocs = await Llm.countDocuments({ [llmField]: llmFieldId });

    if (relatedDocs === 1) {
      console.log("removing", llmFieldId, llmFieldId);
      await llmModel.deleteOne({ _id: llmFieldId });
    }
  };
}