import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "",
});
const reqInterceptor = axiosInstance.interceptors.request.use(
  (request) => {
    const accessToken = localStorage.getItem("token");
    request.headers["Authorization"] = "Bearer " + accessToken;
    request.headers["Content-Type"] = "application/json";
    return request;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
