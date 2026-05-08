import { Button, Form, Modal } from "react-bootstrap";

export default function Modal_Register( { show, ocultar } ) {
    return (
        <>
        <Modal show={show} onHide={ocultar} centered>
            <Modal.Header closeButton>
                <Modal.Title className="text-center w-100">
                    <p className="p-0 m-0">E-Commerce</p>
                    <p className="fw-normal p-0 m-0 fs-6 text-muted">Crea una nueva cuenta</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="p-2">
                    <Form.Group controlId="NombreR" className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group controlId="TelR" className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control placeholder="+57 123456789" />
                    </Form.Group>
                    <Form.Group controlId="emailR" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="example@mail.com" />
                    </Form.Group>
                    <Form.Group controlId="contraR" className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control placeholder="••••••••" />
                    </Form.Group>        
                    <Button className="mb-4 w-100 app-color-button fw-semibold">Crear cuenta</Button>
                </Form>
            </Modal.Body>
        </Modal>
        </>
    )
    
}