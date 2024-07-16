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