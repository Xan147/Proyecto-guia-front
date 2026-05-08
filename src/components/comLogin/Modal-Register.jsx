import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { registrarUsuario } from "../../api/apiUsuario";

export default function Modal_Register( { show, ocultar } ) {

    const [form, setForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCargando(true);
        setError(null);

        try {
        await registrarUsuario(form);
        ocultar();
        } catch (err) {
        setError(err.response?.data?.message || "Error al crear la cuenta");
        } finally {
        setCargando(false);
        }
    };

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
                <Form className="p-2" onSubmit={handleSubmit}>
                    <Form.Group controlId="NombreR" className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control name="nombre" placeholder="Nombre" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="TelR" className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control name="telefono" placeholder="+57 123456789" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="emailR" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="example@mail.com" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="contraR" className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control name="password" type="password" placeholder="••••••••" onChange={handleChange} />
                    </Form.Group>

                    {error && <p className="text-danger text-center mb-3">{error}</p>}

                    <Button type="submit" className="mb-4 w-100 app-color-button fw-semibold" disabled={cargando} >{cargando ? "Creando cuenta..." : "Crear cuenta"}</Button>

                </Form>
            </Modal.Body>
        </Modal>
        </>
    );
};