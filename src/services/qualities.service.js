import httpServise from "./http.service";

const qualitiesEndpoint = "quality/";
const qualitiesServise = {
    get: async () => {
        const { data } = await httpServise.get(qualitiesEndpoint);
        return data;
    }
};

export default qualitiesServise;
