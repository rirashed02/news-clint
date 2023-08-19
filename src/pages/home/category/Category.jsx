
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../news/NewsCart';

const Category = () => {
    const categoryNews = useLoaderData()
    console.log(categoryNews)
    return (
        <div>
            <h4>News {categoryNews.length}</h4>
            {categoryNews.map(news => <NewsCart key={news._id} news={news}></NewsCart>)}
        </div>
    );
};

export default Category;