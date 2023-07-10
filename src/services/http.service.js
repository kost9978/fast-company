import axios from "axios";
import { toast } from "react-toastify";
import config from "../config.json";
axios.defaults.baseURL = config.url;
axios.interceptors.response.use(
    (res) => res,
    function (error) {
        const isExpectedError =
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500;

        if (!isExpectedError) {
            toast.error("Подождите, скоро мы все починим :)");
            console.log(error);
        }

        return Promise.reject(error);
    }
);
const httpServise = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};

export default httpServise;
