import axios from 'axios'
const axiosInstance = axios.create({
    // baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://127.0.0.1:8000/api',
    // headers: { common: { 'Authorization': `Bearer ${store.state.login.token}` }}
});
export default axiosInstance