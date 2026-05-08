import { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { LuShoppingBasket } from "react-icons/lu";
import { Outlet } from "react-router-dom";
import Modal_Login from "../comLogin/Modal-Login";
import Modal_Register from "../comLogin/Modal-Register";

export default function NavBar() {
    const [show, setShow] = useState(false);
    const [showregister, setShowregister] = useState(false); //Variables para mostrar el modal de registro

    const MostrarModals = (modal) => {
        if (show === true) {
            setShow(false);
            setShowregister(true);
        } else if (showregister === true) {
            setShow(false);
            setShowregister(false);
        } else {
            setShow(true);
        }
    }

    return (
        <>
        <Navbar expand="true" className="shadow-sm mb-4 p-0">
            <Container className="p-0">
                <Navbar.Brand>
                    <h5>Shop proyect</h5>
                    <p className="fs-text-nav m-0 p-0 d-flex align-items-center"><LuShoppingBasket />Tienda Online</p>
                </Navbar.Brand>
                <Button className="fw-semibold app-color-button" onClick={MostrarModals}>Iniciar Sesion</Button>
            </Container>
        </Navbar>
        <Modal_Login show={show} ocultar={MostrarModals} />
        <Modal_Register show={showregister} ocultar={MostrarModals} />
        {/*Oulet sirve para definir donde se renderiza el contenido de las paginas despues del NAV*/}
        <Outlet />
        </>
    )
}