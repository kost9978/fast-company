import httpServise from "./http.service";

const professionEndpoint = "profession/";
const professionServise = {
    get: async () => {
        const { data } = await httpServise.get(professionEndpoint);
        return data;
    }
};

export default professionServise;
