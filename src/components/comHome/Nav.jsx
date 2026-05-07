import { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { LuShoppingBasket } from "react-icons/lu";
import { Outlet } from "react-router-dom";
import Modal_Login from "../comLogin/Modal-Login";

export default function NavBar() {
    const [show, setShow] = useState(false);

    return (
        <>
        <Navbar expand="true" className="shadow-sm mb-4 p-0">
            <Container className="p-0">
                <Navbar.Brand>
                    <h5>Shop proyect</h5>
                    <p className="fs-text-nav m-0 p-0 d-flex align-items-center"><LuShoppingBasket />Tienda Online</p>
                </Navbar.Brand>
                <Button className="fw-semibold app-color-button" onClick={() => setShow(true)}>Iniciar Sesion</Button>
            </Container>
        </Navbar>
        <Modal_Login show={show} ocultar={() => setShow(false)} />
        {/*Oulet sirve para definir donde se renderiza el contenido de las paginas despues del NAV*/}
        <Outlet />
        </>
    )
}