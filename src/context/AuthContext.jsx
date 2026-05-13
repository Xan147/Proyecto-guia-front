import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    //Inicializar el estado del usuario con los datos guardados en localStorage (si existen)
    const [usuario, setUsuario] = useState(() => {
        const token = localStorage.getItem("token");
        const nombre = localStorage.getItem("usuario");
        const rol = localStorage.getItem("roles");
        return token ? { token, nombre, rol: rol ? JSON.parse(roles) : [] } : null;
    });

    //Guardar los datos recibidos del back para estar disponibles en toda la app
    const login = (data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", data.usuario);
        localStorage.setItem("rol", JSON.stringify(data.roles));
        setUsuario({
            token: data.token,
            nombre: data.usuario,
            rol: data.roles
        });
    };

    //Cerrar sesion y borrar los datos guardados
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        localStorage.removeItem("rol");
        setUsuario(null);
    };

    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

//Manera alternativa de usar el context
export const useAuth = () => useContext(AuthContext);