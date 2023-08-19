import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo)
        createUser(email,password)
        .then(result => {
            const createUser = result.user;
            console.log(createUser)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Container className="w-25 mx-auto">
                <h3>Register here</h3>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" name="name" placeholder="Enter Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name="photo" placeholder="Enter Photo_URL" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name="accept" label="Terms and Conditions" />
                    </Form.Group>

                    <Button variant="primary" type="Register">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-muted text-secondary">
                        Already have an Account? <Link to='/login'>Login</Link>
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

export default Register;