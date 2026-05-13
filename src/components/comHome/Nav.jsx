import { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { LuShoppingBasket } from "react-icons/lu";
import { Outlet } from "react-router-dom";
import Modal_Login from "../comLogin/Modal-Login";
import Modal_Register from "../comLogin/Modal-Register";
import { useAuth } from "../../context/AuthContext";

export default function NavBar() {
    const { usuario, logout } = useAuth();
    const [show, setShow] = useState(false);
    const [showregister, setShowregister] = useState(false); //Variables para mostrar el modal de registro

    const MostrarModals = (modal) => {
        if (modal === "oplogin") {
            setShow(true);
            setShowregister(false);
        } else if (modal === "clogin") {
            setShow(false);
            setShowregister(false);
        } else if (modal === "opregis") {
            setShow(false);
            setShowregister(true);
        } else {
            setShow(false);
            setShowregister(false);
        }
    }

    return (
        <>
        <Navbar className="shadow-sm mb-4 p-0">
            <Container className="p-0">
                <Navbar.Brand>
                    <h5>Shop proyect</h5>
                    <p className="fs-text-nav m-0 p-0 d-flex align-items-center"><LuShoppingBasket />Tienda Online</p>
                </Navbar.Brand>
                {usuario ? (
                    <>
                    <div className="d-flex gap-4 align-items-center">
                        <div>
                            <p className="fw-semibold m-0">Bienvenido, {usuario.nombre}</p>
                            <p className="fw-semibold m-0">Rol: {usuario.rol[0] === "ROLE_ADMIN" ? "Administrador" : "Usuario"}</p>
                        </div>
                        <Button className="fw-semibold app-color-button" onClick={logout}>Cerrar Sesion</Button>
                    </div>
                    </>
                ) : (
                    <Button className="fw-semibold app-color-button" onClick={() => MostrarModals("oplogin")}>Iniciar Sesion</Button>
                )}
            </Container>
        </Navbar>
        <Modal_Login show={show} ocultar={() => MostrarModals("clogin")} mostrarRegister={() => MostrarModals("opregis")} />
        <Modal_Register show={showregister} ocultar={() => MostrarModals("cregister")} />
        {/*Oulet sirve para definir donde se renderiza el contenido de las paginas despues del NAV*/}
        <Outlet />
        </>
    )
}