import { Button, Form, Modal } from "react-bootstrap";
import './style-modals-login.css';
import { useState } from "react";
import { loginUsuario } from "../../api/apiLogin";

export default function Modal_Login({ show, ocultar, mostrarRegister }) {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const data = await loginUsuario(form);

            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.email);

            console.log("Login exitoso:", data);

            ocultar();

        } catch (err) {
            if (err.response?.status === 401 || err.response?.status === 403) {
                setError("Email o contraseña incorrectos");
            } else {
                setError("Error al conectar con el servidor");
            }
        } finally {
            setLoading(false);
        }
    };

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
                <Form className="p-2" onSubmit={handleLogin}>
                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="example@mail.com" value={form.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="contra" className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
                    </Form.Group>

                    {error && <p className="text-danger text-center mb-3">{error}</p>}

                    <Button type="submit" className="mb-4 w-100 app-color-button fw-semibold" disabled={loading} >{loading ? "Iniciando sesión..." : "Iniciar sesión"}</Button>
                </Form>
                <div className="text-center">
                    <a onClick={mostrarRegister} href="#" className="fw-semibold link-create-acc">¿No tienes cuenta?</a>
                </div>
            </Modal.Body>
        </Modal>
        </>
    );
}