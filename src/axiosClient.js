import axios from "axios";
import { isProduction } from "@/common";

const devApiUrl = "https://178.172.255.18";

const prodApiUrl = "https://stuff.ieltswise67.com";

export const apiUrl = isProduction ? prodApiUrl : devApiUrl;
console.log("apiUrl", apiUrl);

const axiosClient = axios.create({
  baseURL: apiUrl,
});

export default axiosClient;
