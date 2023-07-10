import httpServise from "./http.service";

const userEndpoint = "user/";
const userServise = {
    get: async () => {
        const { data } = await httpServise.get(userEndpoint);
        return data;
    }
};

export default userServise;
