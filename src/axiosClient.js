import axios from "axios";

const devApiUrl = "https://178.172.255.18";

const prodApiUrl = "https://stuff.ieltswise67.com";

export const apiUrl = process.env.NEXT_PUBLIC_SITE_NAME === "production" ? prodApiUrl : devApiUrl;
console.log("apiUrl", apiUrl);

const axiosClient = axios.create({
  baseURL: apiUrl,
});

export default axiosClient;
