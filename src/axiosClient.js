import axios from 'axios';

export const apiUrl = 'https://178.172.255.18';

const axiosClient = axios.create({
  baseURL: apiUrl,
});

export default axiosClient;