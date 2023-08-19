import { Button, Container } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import {  FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';
import QZone from "../qZone/QZone";


const RightSideNav = () => {
    return (
        <Container>
            <div className="mb-4">
                <h4 className="mb-3">Login With</h4>
                <div className="mb-4">
                    <Button variant="outline-primary mb-2">Login With Google</Button>
                    <Button variant="outline-secondary">Login With GitHub</Button>
                </div>
                <h4 className="mb-3">Find us on</h4>
                <div>
                    <ListGroup>
                        <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                        <ListGroup.Item><FaGoogle/> Google</ListGroup.Item>
                        <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
            <QZone></QZone>
        </Container>
    );
};

export default RightSideNav;