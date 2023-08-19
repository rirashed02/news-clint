import moment from 'moment';
import { Card, Container, Image } from 'react-bootstrap';
import { FaBeer, FaBookmark, FaEye, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { _id, title, author, image_url, details,total_view, rating } = news
    return (

            <Card className="mb-5">
                <Card.Header className='mb-3 d-flex ' >
                    <Image style={{ height: '50px',marginRight:'15px' }} src={author?.img} roundedCircle />
                    <div className='flex-grow-1 '>
                        <p className='mb-0'>{author?.name}</p>
                        {moment().format('YYYY MM D')}
                    </div>
                    <div className='fs-4'>
                        <FaBookmark/>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Title className='mb-3 px-3'>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0,250)}... <Link to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div>
                        <p><FaEye></FaEye> {total_view}</p>
                    </div>
                </Card.Footer>
            </Card>
        
    );
};

export default NewsCart;