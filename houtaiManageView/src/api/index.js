import axios from "axios";
import { showLoading,hideLoading } from "@/publicUtils/loading.js"
// 创建一个axios实例
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // 完整url = baseUrl + requestUrl
  baseURL: 'http://localhost:3001', // 完整url = baseUrl + requestUrl
  timeout: 5000  // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    console.log(config);
    // 携带token, 设置请求头
    config.headers['Authorization'] = localStorage.getItem('token') || 'hfsdiufhdsifdshbfiuds';
    showLoading();
    return config
  },

  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }

)

// 响应拦截器
service.interceptors.response.use(

  response => {
    console.log(response);
    const res = response.data;
    hideLoading();
    return res
  },  

  error => {
    hideLoading();
    // 对响应错误做些什么
    return Promise.reject(error)
  }

)

export default service