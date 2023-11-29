import axios from "axios";

const BASE_URL="https://fe-task-api.mainstack.io/";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
})


export default axiosInstance;