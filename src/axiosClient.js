import axios from "axios";

const devApiUrl = "https://178.172.255.18";

export const apiUrl = process.env.NEXT_PUBLIC_API_URL || devApiUrl;
console.log("apiUrl", apiUrl);

const axiosClient = axios.create({
  baseURL: apiUrl,
});

export default axiosClient;
