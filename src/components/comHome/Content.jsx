import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { obtenerProductsActives } from "../../api/apiProductos";

export default function Content_Home() {
    const [productos, setProductos] = useState([]);

    const loadProductos = async () => {
        try {
            const data = await obtenerProductsActives();
            setProductos(data);
            console.log("Se cargo: ", data)
        } catch (error) {
            console.log("Error al cargar los productos.");
        }
    }

    //Al cargar el componente
    useEffect(() => {
        loadProductos();
    }, []);

    return (
        <>
        <h4>Catalogo de Productos</h4>
        <p className="text-muted">Explora nuestros productos.</p>

        <Row className="mb-4">
            <Col className="d-flex gap-2">
            <Button className="fw-semibold app-color-button">Todas</Button>
            <Button className="fw-semibold bg-light text-dark">Prueba</Button>
            </Col>
        </Row>

        <Row>
            {productos.map((producto) => (
            <Col xs={3} key={producto.id}>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" />
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between">
                            {producto.name}
                            <Badge pill className="fw-medium fs-home badge-home-category">{producto.category}</Badge>
                        </Card.Title>
                        <Card.Text className="text-muted">{producto.description}</Card.Text>
                        <div className="d-flex justify-content-between">
                            <p className="color-price-product">$ {producto.price.toLocaleString("es-CO")}</p>
                            <small className="text-muted">Stock: {producto.existence}</small>
                        </div>
                        <Button className="fw-semibold app-color-button">Añadir al carrito</Button>
                    </Card.Body>
                </Card>
            </Col>

            ))}
            
        </Row>
        </>
    )
    
}