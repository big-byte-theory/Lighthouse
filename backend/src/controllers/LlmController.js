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
          path: 'created_date_id',
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
          path: 'created_date_id',
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
    const {
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
      model_card,
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
      'model_card',
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
      'created_date': created_date,
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
      'model_card': model_card,
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

    const referencedFields = await this.referenceFields(
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
      data.model_card,
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
        type_id: referencedFields.type_id,
        name: name,
        llm_data_id: Number(llm_data),
        organization_id: referencedFields.organization_id,
        description_id: referencedFields.description_id,
        created_date_id: referencedFields.created_date_id,
        url_id: referencedFields.url_id,
        datasheet_id: referencedFields.datasheet_id,
        modality_id: referencedFields.modality_id,
        size_id: referencedFields.size_id,
        sample_id: referencedFields.sample_id,
        analysis_id: referencedFields.analysis_id,
        dependencies_id: referencedFields.dependencies_id,
        included_id: referencedFields.included_id,
        excluded_id: referencedFields.excluded_id,
        quality_control_id: referencedFields.quality_control_id,
        access_id: referencedFields.access_id,
        license_id: referencedFields.license_id,
        intended_uses_id: referencedFields.intended_uses_id,
        prohibited_uses_id: referencedFields.prohibited_uses_id,
        monitoring_id: referencedFields.monitoring_id,
        feedback_id: referencedFields.feedback_id,
        model_card_id: referencedFields.model_card_id,
        training_emissions_id: referencedFields.training_emissions_id,
        training_time_id: referencedFields.training_time_id,
        training_hardware_id: referencedFields.training_hardware_id,
        adaptation_id: referencedFields.adaptation_id,
        output_space_id: referencedFields.output_space_id,
        sample_id: referencedFields.sample_id,
        terms_of_service_id: referencedFields.terms_of_service_id,
        monthly_active_users_id: referencedFields.monthly_active_users_id,
        user_distribution_id: referencedFields.user_distribution_id,
        failures_id: referencedFields.failures_id,
      });
      
      console.log("llm to save", newLlm);
      const llm = await newLlm.save();
      return res.status(201).json({
        status: 201,
        msg: "LLM added successfully",
        llm
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({status: 500, msg: 'Server Error'});
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

  referenceFields = async (
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
    qualityControl,
    access,
    license,
    intendedUses,
    prohibitedUses,
    monitoring,
    feedback,
    modelCard,
    trainingEmissions,
    trainingTime,
    trainingHardware,
    adaptation,
    outputSpace,
    termsOfService,
    monthlyActiveUsers,
    userDistribution,
    failures,
  ) => {
    let typeId, organizationId, dateId, descriptionId, urlId, datasheetId, modalityId, sizeId, analysisId, sampleId, dependenciesId, includedId, excludedId, qualityControlId, accessId, licenseId, intendedUsesId, prohibitedUsesId, monitoringId, feedbackId, modelCardId, trainingEmissionsId, trainingTimeId, trainingHardwareId, adaptationId, outputSpaceId, termsOfServiceId, monthlyActiveUsersId, userDistributionId, failuresId;

    try { 
      typeId = await LlmType.findOne({ type: type });
    } catch (err) {
      console.error("type error", err.message);
      return err.message;
    }

    try {
      const docsCount = await LlmOrganization.countDocuments();
      organizationId = await LlmOrganization.findOneAndUpdate(
        { organization: organization },
        { $setOnInsert: { organization_id: Number(docsCount + 1), organization: organization } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("organization error", err.message);
     return err.message;
    }

    try { 
      const docsCount = await LlmDescription.countDocuments();
      descriptionId = await LlmDescription.findOneAndUpdate(
        { description: description },
        { $setOnInsert: { description_id: Number(docsCount + 1), description: description } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) { 
      console.error("description error", err.message);
     return err.message;
    }

    let createdDate = new Date(created_date).toISOString();

    try {
      dateId = await LlmCreatedDate.findOne({ created_date: createdDate });

      if (!dateId) {
        // Count the number of documents in the collection
        const docsCount = await LlmCreatedDate.countDocuments();

        // Insert the new document with created_date_id set to count + 1
        dateId = await LlmCreatedDate.findOneAndUpdate(
          { created_date: createdDate },
          { $setOnInsert: { created_date_id: Number(docsCount + 1), created_date: createdDate } },
          { upsert: true, returnDocument: 'after' }
        );
      }
      console.log("created_date", created_date, "created_date_id", dateId, "dateId._id", dateId._id);
    } catch (err) {
      console.error("created_date error", err.message);
     return err.message;
    }

    try {
      const docsCount = await LlmUrl.countDocuments();
      urlId = await LlmUrl.findOneAndUpdate(
        { url: url },
        { $setOnInsert: { url_id: Number(docsCount + 1), url: url } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("url error", err.message);
     return err.message;
    }

    try {
      const docsCount = await LlmDatasheet.countDocuments();
      datasheetId = await LlmDatasheet.findOneAndUpdate(
        { datasheet: datasheet },
        { $setOnInsert: { datasheet_id: Number(docsCount + 1), datasheet: datasheet } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("datasheet error", err.message);
     return err.message;
    }

    try {
      const docsCount = await LlmModality.countDocuments();
      modalityId = await LlmModality.findOneAndUpdate(
        { modality: modality },
        { $setOnInsert: { modality_id: Number(docsCount + 1), modality: modality } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("modality error", err.message);
     return err.message;
    }

    try { 
      const docsCount = await LlmSize.countDocuments();
      sizeId = await LlmSize.findOneAndUpdate(
        { size: size },
        { $setOnInsert: { size_id: Number(docsCount + 1), size: size } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("size error", err.message);
     return err.message;
    }

    try { 
      const docsCount = await LlmAnalysis.countDocuments();
      analysisId = await LlmAnalysis.findOneAndUpdate(
        { analysis: analysis },
        { $setOnInsert: { analysis_id: Number(docsCount + 1), analysis: analysis } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("analysis error", err.message);
     return err.message;
    }

    try {
      /! TODO: should have an array of dependencies/
      const docsCount = await LlmDependencies.countDocuments();
      dependenciesId = await LlmDependencies.findOneAndUpdate(
        { dependencies: dependencies },
        { $setOnInsert: { dependencies_id: Number(docsCount + 1), dependencies: dependencies } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("dependencies error", err.message);
     return err.message;
    }

    try { 
      const docsCount = await LlmIncluded.countDocuments();
      includedId = await LlmIncluded.findOneAndUpdate(
        { included: included },
        { $setOnInsert: { included_id: docsCount +  1, included: included } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("included error", err.message);
     return err.message;
    }

    try {
      const docsCount = await LlmExcluded.countDocuments();
      excludedId = await LlmExcluded.findOneAndUpdate(
        { excluded: excluded },
        { $setOnInsert: { excluded_id: Number(docsCount + 1), excluded: excluded } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("excluded error", err.message);
     return err.message;
    }
    
    try { 
      const docsCount = await LlmQualityControl.countDocuments();
      qualityControlId = await LlmQualityControl.findOneAndUpdate(
        { quality_control: qualityControl },
        { $setOnInsert: { quality_control_id: Number(docsCount + 1), quality_control: qualityControl } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) { 
      console.error("quality_control error", err.message);
     return err.message;
    }
    
    try {
      accessId = await LlmAccess.findOne({ access: access });
    } catch (err) {
      console.error("access error", err.message);
     return err.message;
    }

    try {
      const docsCount = await LlmLicense.countDocuments();
      licenseId = await LlmLicense.findOneAndUpdate(
        { license: license },
        { $setOnInsert: { license_id: Number(docsCount + 1), license: license } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("license error", err.message);
     return err.message;
    }
    
    try {
      const docsCount = await LlmIntendedUse.countDocuments();
      intendedUsesId = await LlmIntendedUse.findOneAndUpdate(
        { intended_uses: intendedUses },
        { $setOnInsert: { intended_uses_id: Number(docsCount + 1), intended_uses: intendedUses } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("intended_uses error", err.message);
     return err.message;
    }

    try { 
      const docsCount = await LlmProhibitedUse.countDocuments();
      prohibitedUsesId = await LlmProhibitedUse.findOneAndUpdate(
        { prohibited_uses: prohibitedUses },
        { $setOnInsert: { prohibited_uses_id: Number(docsCount + 1), prohibited_uses: prohibitedUses } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("prohibited_uses error", err.message);
     return err.message;
    }

    try { 
      const docsCount = await LlmMonitoring.countDocuments();
      monitoringId = await LlmMonitoring.findOneAndUpdate(
        { monitoring: monitoring },
        { $setOnInsert: { monitoring_id: Number(docsCount + 1), monitoring: monitoring } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("monitoring error", err.message);
     return err.message;
    }

    try { 
      const docsCount = await LlmFeedback.countDocuments();
      feedbackId = await LlmFeedback.findOneAndUpdate(
        { feedback: feedback },
        { $setOnInsert: { feedback_id: Number(docsCount + 1), feedback: feedback } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("feedback error", err.message);
     return err.message;
    }

    try { 
      const docsCount = await LlmModelCard.countDocuments();
      modelCardId = await LlmModelCard.findOneAndUpdate(
        { model_card: modelCard },
        { $setOnInsert: { model_card_id: Number(docsCount + 1), model_card: modelCard } },
        { upsert: true, returnDocument: 'after' }
      );
      console.log("model_card", modelCard, "modelCardId", modelCardId, "modelCardId._id", modelCardId._id);
    } catch (err) { 
      console.error("model_card error", err.message);
     return err.message;
    }

    try { 
      const docsCount = await LlmSample.countDocuments();
      sampleId = await LlmSample.findOneAndUpdate(
        { sample: sample },
        { $setOnInsert: { sample_id: Number(docsCount + 1), sample: sample } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("sample error", err.message);
     return err.message;
    }

    try { 
      const docsCount = await LlmTrainingEmission.countDocuments();
      trainingEmissionsId = await LlmTrainingEmission.findOneAndUpdate(
        { training_emissions: trainingEmissions },
        { $setOnInsert: { training_emissions_id: Number(docsCount + 1), training_emissions: trainingEmissions } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("training_emissions error", err.message);
     return err.message;
    }

    try { 
      const docsCount = await LlmTrainingTime.countDocuments();
      trainingTimeId = await LlmTrainingTime.findOneAndUpdate(
        { training_time: trainingTime },
        { $setOnInsert: { training_time_id: Number(docsCount + 1), training_time: trainingTime } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("training_time error", err.message);
     return err.message;
    }

    try { 
      const docsCount = await LlmTrainingHardware.countDocuments();
      trainingHardwareId = await LlmTrainingHardware.findOneAndUpdate(
        { training_hardware: trainingHardware },
        { $setOnInsert: { training_hardware_id: Number(docsCount + 1), training_hardware: trainingHardware } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("training_hardware error", err.message);
     return err.message;
    }

    try {
      const docsCount = await LlmAdaptation.countDocuments();
      adaptationId = await LlmAdaptation.findOneAndUpdate(
        { adaptation: adaptation },
        { $setOnInsert: { adaptation_id: Number(docsCount + 1), adaptation: adaptation } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("adaptation error", err.message);
      return err.message;
    }

    try { 
      const docsCount = await LlmOutputSpace.countDocuments();
      outputSpaceId = await LlmOutputSpace.findOneAndUpdate(
        { output_space: outputSpace },
        { $setOnInsert: { output_space_id: Number(docsCount + 1), output_space: outputSpace } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("output_space error", err.message);
      return err.message;
    }
    
    try { 
      const docsCount = await LlmTermsOfService.countDocuments();
      termsOfServiceId = await LlmTermsOfService.findOneAndUpdate(
        { terms_of_service: termsOfService },
        { $setOnInsert: { terms_of_service_id: Number(docsCount + 1), terms_of_service: termsOfService } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("terms_of_service error", err.message);
      return err.message;
    }

    try { 
      const docsCount = await LlmMonthlyActiveUser.countDocuments();
      monthlyActiveUsersId = await LlmMonthlyActiveUser.findOneAndUpdate(
        { monthly_active_users: monthlyActiveUsers },
        { $setOnInsert: { monthly_active_users_id: Number(docsCount + 1), monthly_active_users: monthlyActiveUsers } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("monthly_active_users error", err.message);
      return err.message;
    }

    try {
      const docsCount = await LlmUserDistribution.countDocuments();
      userDistributionId = await LlmUserDistribution.findOneAndUpdate(
        { user_distribution: userDistribution },
        { $setOnInsert: { user_distribution_id: Number(docsCount + 1), user_distribution: userDistribution } },
        { upsert: true, returnDocument: 'after' }
      );
    } catch (err) {
      console.error("user_distribution error", err.message);
      return err.message;
    }

    try { 
      const docsCount = await LlmFailure.countDocuments();
      failuresId = await LlmFailure.findOneAndUpdate(
        { failures: failures },
        { $setOnInsert: { failures_id: Number(docsCount + 1), failures: failures } },
        { upsert: true, returnDocument: 'after' }
      );
      console.log("failures", failures, "failuresId", failuresId, "failuresId._id", failuresId._id);
    } catch (err) { 
      console.error("failures error", err.message);
      return err.message;
    }

    const createLlm = {
      type_id: typeId,
      organization_id: organizationId,
      description_id: descriptionId,
      created_date_id: dateId,
      url_id: urlId,
      datasheet_id: datasheetId,
      modality_id: modalityId,
      size_id: sizeId,
      sample_id: sampleId,
      analysis_id: analysisId,
      dependencies_id: dependenciesId,
      included_id: includedId,
      excluded_id: excludedId,
      quality_control_id: qualityControlId,
      access_id: accessId,
      license_id: licenseId,
      intended_uses_id: intendedUsesId,
      prohibited_uses_id: prohibitedUsesId,
      monitoring_id: monitoringId,
      feedback_id: feedbackId,
      model_card_id: modelCardId,
      training_emissions_id: trainingEmissionsId,
      training_time_id: trainingTimeId,
      training_hardware_id: trainingHardwareId,
      adaptation_id: adaptationId,
      output_space_id: outputSpaceId,
      terms_of_service_id: termsOfServiceId,
      monthly_active_users_id: monthlyActiveUsersId,
      user_distribution_id: userDistributionId,
      failures_id: failuresId,
    };
    console.log("the newly made llm is:", createLlm);
    return createLlm;
  };

  // countMongoDocs = async (collection) => {
  //   const docsCount = await collection.countDocuments();

  //   return Number(docsCount + 1);
  // };

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
  //     model_card_id,
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
  //     model_card_id,
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
        await this.deleteIfUnique(LlmModelCard, 'model_card_id', llm.model_card_id);
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
      return res.status(200).json({ msg: 'LLM removed', status: 200 });
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