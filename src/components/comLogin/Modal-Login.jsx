import { Button, Modal } from "react-bootstrap";

export default function Modal_Login( { show, ocultar}) {
    return (
        <>
        <Modal show={show} onHide={ocultar} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar eliminación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>¿Estás seguro de que deseas realizar esta acción? Esta acción no se puede deshacer.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary">Cancelar</Button>
                <Button variant="danger">Eliminar</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}