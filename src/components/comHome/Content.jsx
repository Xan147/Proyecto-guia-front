import { Badge, Button, Card, Col, Row } from "react-bootstrap";

export default function Content_Home() {
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
            <Col xs={3}>
            <Card>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400" />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        Titulo
                        <Badge pill className="fw-medium fs-home badge-home-category">Categoria</Badge>
                    </Card.Title>
                    <Card.Text className="text-muted">Laptop de alto rendimiento para profesionales</Card.Text>
                    <div className="d-flex justify-content-between">
                        <p className="color-price-product">$ 1.000</p>
                        <small className="text-muted">Stock: 15</small>
                    </div>
                    <Button className="fw-semibold app-color-button">Añadir al carrito</Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </>
    )
    
}