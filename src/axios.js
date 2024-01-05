import defaultAxios from 'axios';

const apiUrl = 'http://178.172.255.18:11101';

const axios = defaultAxios.create({
  baseURL: apiUrl,
});

export default axios;