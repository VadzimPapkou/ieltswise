import axios from 'axios';

const apiUrl = 'https://178.172.255.18';

const axiosClient = axios.create({
  baseURL: apiUrl,
});

export default axiosClient;