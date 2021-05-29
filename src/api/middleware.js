import { BASE_URL } from "./endpoint";
import axios from "axios"
export const API = axios.create({
    baseURL: BASE_URL,
    timeout: Number.MAX_VALUE,
  });