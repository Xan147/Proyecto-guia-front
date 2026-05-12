import api from "./axiosConfig";

const URL = "/auth";

export const loginUsuario = async (datos) => {
    const response = await api.post(`${URL}/login`, datos);
    return response.data;
};