import axios from 'axios';

const apiUrl = 'http://178.172.255.18:11101';

const axiosClient = axios.create({
  baseURL: apiUrl,
});

export default axiosClient;