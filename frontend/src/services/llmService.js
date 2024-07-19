import axios from 'axios';

const apiUrl = import.meta.env.VITE_APP_BACKENDURL;

export const getLlms = async () => {
  const response = await axios.get(`${ apiUrl }/catalogue`);
  return response.data;
};

export const addLlm = async (llm) => {
  const response = await axios.post(`${apiUrl}/llms`, llm);
  return response.data;
};

export const updateLlm = async (id, llm) => {
  const response = await axios.put(`${apiUrl}/llms/${id}`, llm);
  return response.data;
};

export const deleteLlm = async (id) => {
  const response = await axios.delete(`${apiUrl}/llms/${id}`);
  return response.data;
};