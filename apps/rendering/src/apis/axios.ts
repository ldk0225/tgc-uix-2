import _axios from 'axios';
import { AxiosCustomError } from './api.type';

const createAxios = () => {
  const axios = _axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
      'Accept': '*',
    },
  });

  axios.interceptors.response.use(
    (response) => response.data,
    (error: AxiosCustomError) => {
      return Promise.reject(error);
    },
  );

  return axios;
};

export const axios = createAxios();
