import api from "./axiosConfig";

const URL = "/products";

export const obtenerProductsActives = async () => {
    const response = await api.get(URL);
    return response.data;
}