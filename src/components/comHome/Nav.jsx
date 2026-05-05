import { Button, Container, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <>
        <Navbar expand="true" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#">Guia de Turismo</Navbar.Brand>
                <Button className="fw-semibold app-color-button">Iniciar Sesion</Button>
            </Container>
        </Navbar>
        </>
    )
}