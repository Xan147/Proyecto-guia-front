import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(() => {
        const token = localStorage.getItem("token");
        const nombre = localStorage.getItem("usuario");
        const email = localStorage.getItem("email");
        return token ? { token, nombre, email } : null;
    });

    //Guardar los datos recibidos del back para estar disponibles en toda la app
    const login = (data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("usuario", data.usuario);
        localStorage.setItem("email", data.email);
        setUsuario({
            token: data.token,
            nombre: data.usuario,
            email: data.email
        });
    };

    //Cerrar sesion y borrar los datos guardados
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        localStorage.removeItem("email");
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