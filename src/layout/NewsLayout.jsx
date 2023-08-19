import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightSideNav from '../pages/shared/rightSideNav/RightSideNav';
import Header from '../pages/shared/header/Header';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}> 
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLayout;