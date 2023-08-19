/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/category/0'
    const handleSignIn = event => {
        event.preventDefault()
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;

        console.log(password, email)

        signIn(email, password)
            .then(result => {
                const userSingIn = result.user;
                console.log(userSingIn)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Container className="w-25 mx-auto">
                <h3>Login here</h3>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="login">
                        login
                    </Button>
                    <br />
                    <Form.Text className="text-muted text-secondary">
                        <p> Don't have an Account?</p> <Link to='/register'>Register</Link>
                    </Form.Text>
                    <Form.Text className="text-muted text-success">
                    </Form.Text>
                    <Form.Text className="text-muted text-danger">
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Login;