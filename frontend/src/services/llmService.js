import axios from 'axios';

const baseUrl = 'http://localhost:5002/api';

// Helper function to create API URLs for different collections
const createApiUrl = (collection) => `${baseUrl}/${collection}`;

// CRUD operations for LlmAccess
export const getLlmAccess = async () => {
  const response = await axios.get(createApiUrl('llmaccess'));
  return response.data;
};

export const addLlmAccess = async (data) => {
  const response = await axios.post(createApiUrl('llmaccess'), data);
  return response.data;
};

export const updateLlmAccess = async (id, data) => {
  const response = await axios.put(`${createApiUrl('llmaccess')}/${id}`, data);
  return response.data;
};

export const deleteLlmAccess = async (id) => {
  const response = await axios.delete(`${createApiUrl('llmaccess')}/${id}`);
  return response.data;
};

// CRUD operations for LlmAdaptation
export const getLlmAdaptation = async () => {
  const response = await axios.get(createApiUrl('llmadaptation'));
  return response.data;
};

export const addLlmAdaptation = async (data) => {
  const response = await axios.post(createApiUrl('llmadaptation'), data);
  return response.data;
};

export const updateLlmAdaptation = async (id, data) => {
  const response = await axios.put(`${createApiUrl('llmadaptation')}/${id}`, data);
  return response.data;
};

export const deleteLlmAdaptation = async (id) => {
  const response = await axios.delete(`${createApiUrl('llmadaptation')}/${id}`);
  return response.data;
};

// CRUD operations for LlmAnalysis
export const getLlmAnalysis = async () => {
  const response = await axios.get(createApiUrl('llmanalysis'));
  return response.data;
};

export const addLlmAnalysis = async (data) => {
  const response = await axios.post(createApiUrl('llmanalysis'), data);
  return response.data;
};

export const updateLlmAnalysis = async (id, data) => {
  const response = await axios.put(`${createApiUrl('llmanalysis')}/${id}`, data);
  return response.data;
};

export const deleteLlmAnalysis = async (id) => {
  const response = await axios.delete(`${createApiUrl('llmanalysis')}/${id}`);
  return response.data;
};