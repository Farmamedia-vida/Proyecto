import { Container, Row, Col, Card } from "react-bootstrap";
import useAuth from "../auth/useAuth";

export default function AccountPage() {
    const { user } = useAuth();

    return (
        <Container>
            <Row className='mt-5'>
                <Col xs={12} className='text-center'>
                    <img
                        src='/img/male_avatar.svg'
                        alt='profile'
                        style={{
                            width:'200px',
                            height:'200px',
                            borderRadius:'50%',
                            objectFit: 'cover'
                        }}
                    />
                </Col>
                <Col className='mt-4'>
                    <Card>
                        <p className='text-center'><b>Nombre: </b>{user.name}</p>
                        <p className='text-center'><b>Email: </b>{user.email}</p>
                        <p className='text-center'><b>Rol: </b>{user.role}</p>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    )
}
