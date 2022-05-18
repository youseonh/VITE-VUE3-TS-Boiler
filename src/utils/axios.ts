import Axios, { AxiosInstance } from "axios";
import { formatJsonToUrlParams, instanceObject } from "/@/utils/format";

const baseURL = "https://baseURL명";

const axios: AxiosInstance = Axios.create({
  baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
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
    return axios.post(url, data);
  },

  put<T = any>(url: string, data?: object): Promise<T> {
    return axios.put(url, data);
  },

  delete<T = any>(url: string, data?: object): Promise<T> {
    return axios.delete(url, data);
  },

  upload: (url: string, file: FormData | File) =>
    axios.post(url, file, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  download: (url: string, data: instanceObject) => {
    window.location.href = `${baseURL}/${url}?${formatJsonToUrlParams(data)}`;
  },
};

export default axiosHelper;
