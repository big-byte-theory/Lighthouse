import axios from 'axios';

const apiUrl = 'http://localhost:5000/api/llms';

export const getLlms = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const addLlm = async (llm) => {
  const response = await axios.post(apiUrl, llm);
  return response.data;
};

export const updateLlm = async (id, llm) => {
  const response = await axios.put(`${apiUrl}/${id}`, llm);
  return response.data;
};

export const deleteLlm = async (id) => {
  const response = await axios.delete(`${apiUrl}/${id}`);
  return response.data;
};