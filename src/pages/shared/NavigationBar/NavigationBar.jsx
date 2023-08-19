import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext)
    const userLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-4">
            <Container>
                <Navbar.Brand href="/category/0">DRAGON</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to='/category/0' className='text-decoration-none text-black'>Home</Link>
                        <Link className='text-decoration-none ms-2 text-black'>About</Link>
                        <Link className='text-decoration-none ms-2 text-black'>Career</Link>
                    </Nav>
                    <Nav>
                        {user && <Link className='text-decoration-none text-secondary'><FaUserCircle style={{ fontSize: '40px', marginRight: '10px', cursor: 'pointer', }}></FaUserCircle></Link>}
                        {user ? <Button onClick={userLogOut} variant='dark'>Logout</Button> : <Link to='/login' ><Button variant='dark'>Login</Button></Link>}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;