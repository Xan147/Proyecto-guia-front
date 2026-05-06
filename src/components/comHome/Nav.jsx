import { Button, Container, Navbar } from "react-bootstrap";
import { LuShoppingBasket } from "react-icons/lu";
import { Outlet } from "react-router-dom";

export default function NavBar() {
    return (
        <>
        <Navbar expand="true" className="shadow-sm mb-4">
            <Container className="p-0">
                <Navbar.Brand>
                    <h5>Shop proyect</h5>
                    <p className="fs-text-nav m-0 p-0 d-flex align-items-center"><LuShoppingBasket />Tienda Online</p>
                </Navbar.Brand>
                <Button className="fw-semibold app-color-button">Iniciar Sesion</Button>
            </Container>
        </Navbar>
        {/*Oulet sirve para definir donde se renderiza el contenido de las paginas despues del NAV*/}
        <Outlet />
        </>
    )
}