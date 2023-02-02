import axios from "axios";
import { HOST_API } from "../constants/Config";

const axiosInstance = axios.create({
  baseURL: HOST_API,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
