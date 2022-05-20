/**
 * axios 사용 유틸
 */

import Axios, { AxiosInstance } from 'axios';
import { formatJsonToUrlParams, instanceObject } from '/@/utils/format';
import localCache from '/@/utils/cache';
import { EnumCache } from '/@/enums/cache';

const baseURL = 'https://baseURL명';

const axios: AxiosInstance = Axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// axios 요청시
axios.interceptors.request.use(
  (config) => {
    const token = localCache.getCache(EnumCache.TOKEN_KEY);
    console.log(token);
    // if (token) {
    //   config.headers.Authorization = token;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios 응답시
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      console.error(`Code: ${code}, Message: ${msg}`);
      console.error(`[Axios Error]`, error.response);
    } else {
      console.error(`${error}`);
    }
    return Promise.reject(error);
  }
);

const axiosHelper = {
  get<T = any>(url: string, data?: object): Promise<T> {
    return axios.get(url, { params: data });
  },

  post<T = any>(url: string, data?: object): Promise<T> {
    return axios.post(url, { params: data });
  },

  put<T = any>(url: string, data?: object): Promise<T> {
    return axios.put(url, data);
  },

  delete<T = any>(url: string, data?: object): Promise<T> {
    return axios.delete(url, data);
  },

  upload: (url: string, file: FormData | File) =>
    axios.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  download: (url: string, data: instanceObject) => {
    window.location.href = `${baseURL}/${url}?${formatJsonToUrlParams(data)}`;
  },
};

export default axiosHelper;
