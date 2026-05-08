import { Button, Form, Modal } from "react-bootstrap";
import './style-modals-login.css';
import { useState } from "react";

export default function Modal_Login( { show, ocultar, mostrarRegister } ) {
    return (
        <>
        <Modal show={show} onHide={ocultar} centered>
            <Modal.Header closeButton>
                <Modal.Title className="text-center w-100">
                    <p className="p-0 m-0">E-Commerce</p>
                    <p className="fw-normal p-0 m-0 fs-6 text-muted">Inicia sesion en tu cuenta</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="p-2">
                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="example@mail.com" />
                    </Form.Group>
                    <Form.Group controlId="contra" className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control placeholder="••••••••" />
                    </Form.Group>        
                    <Button className="mb-4 w-100 app-color-button fw-semibold">Iniciar sesion</Button>
                </Form>
                <div className="text-center">
                    <a onClick={mostrarRegister} href="#" className="fw-semibold link-create-acc">¿No tienes cuenta?</a>
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}