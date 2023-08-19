
import { Button, Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from 'react-fast-marquee';
const Header = () => {
    return (
        <Container>
            <div className='text-center mb-4'>
                <img src={logo} alt="" />
                <p>Journalism Without fear or Favour</p>
                {moment().format('dddd, MMMM Do YYYY ')}
                <div className='d-flex mt-3'>
                    <Button variant='danger'>Latest</Button>
                    <Marquee speed={80}>I can be a React component, multiple React components, or just some text.    I can be a React component, multiple React components, or just some text.</Marquee>
                </div>
            </div>
        </Container>
    );
};

export default Header;