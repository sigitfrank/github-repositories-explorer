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
    if (!config.headers.Authorization && env.githubToken) {
      config.headers.Authorization = `Bearer ${env.githubToken}`;
    }

    return config;
  } catch (error) {
    console.error('Error in axios interceptor', error);
    return config;
  }
});
