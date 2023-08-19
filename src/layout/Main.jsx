import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../pages/shared/leftSideNav/LeftSideNav';
import RightSideNav from '../pages/shared/rightSideNav/RightSideNav';
import Header from '../pages/shared/header/Header';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <NavigationBar></NavigationBar>
                <Row>
                    <Col lg={3}>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg={6}> 
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

export default Main;