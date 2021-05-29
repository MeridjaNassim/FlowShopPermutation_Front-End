import { BASE_URL } from "./endpoint";
import axios from "axios"
export const Axios = axios.create({
    baseURL: BASE_URL,
    timeout: Number.MAX_VALUE,
  });