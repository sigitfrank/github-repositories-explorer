import axios from 'axios';
import env from './env';

export const appApiAxiosInstance = axios.create({
  baseURL: env.githubApiUrl,
  headers: {
    Accept: 'application/json',
  },
});

appApiAxiosInstance.interceptors.request.use(async (config) => {
  try {
    return config;
  } catch (error) {
    console.error('Error in axios interceptor', error);
    return config;
  }
});
