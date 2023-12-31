import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft, FaBeer } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData()
    const { category_id, image_url, title, details } = news;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}><Button variant="primary"><FaArrowLeft /> All News in this Category</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default News;