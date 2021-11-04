import { Container, Row, Col } from "react-bootstrap";

export default function HomePage() {
    return (
        <Container>
            <Row className='mt-5'>
                <Col xs={{ span: 12 }} md={{ span: 6}} className='mb-5'>
                    <h2>Bienvenid@ a Farmavida</h2> 
                    <p>
                    ¡Los mejores medicamentos y
                    siempre al alcance de tu mano!
                    </p> 
                </Col>
                <Col>
                    <img
                        className='img-fluid mx-auto d-block'
                        src='/img/logo/logotrans.png'
                        alt='imagen-bienvenida'
                    />
                </Col>
            </Row>
            
        </Container>
    )
}
