import api from "./axiosConfig";

const URL = "/usuarios";

export const registrarUsuario = async (datos) => {
    const response = await api.post(URL, datos);
    return response.data;
};