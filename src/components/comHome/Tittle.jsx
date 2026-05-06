import { Card, Col, Row } from "react-bootstrap";

export default function Tittle_Home() {
    return (
        <>
        <h4>Catalogo de Productos</h4>
        <p className="text-muted">Explora nuestros productos.</p>

        <Row>
            <Col>
            <Card className="p-2 app-color-button">
                <Card.Title>Todas</Card.Title>
            </Card>
            </Col>
        </Row>
        </>
    )
    
}