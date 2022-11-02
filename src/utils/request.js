import axios from 'axios';

const requestApi = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api',
});

export const get = async (path, options = {}) => {
  const response = await requestApi.get(path, options);

  return response.data;
};

export default requestApi;
