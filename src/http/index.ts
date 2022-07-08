import axios, { type AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:3030",
});

/**
 * @constant
 * @type {httpClient}
 */
export default httpClient;
