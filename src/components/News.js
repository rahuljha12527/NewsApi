import {Card} from 'react-bootstrap';
import React from 'react'
import newsData from '../news';

const News = ({news}) => {
    console.log("news",news.source.name);
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/news/${news.id}`}>
                 <Card.Img src={news.urlToImage} variant='top'/>
            </a>

            <Card.Body>
                <a href={`/product/${news.id}`}>
                     <Card.Title as='div'>
                      <strong>{news.source.name}</strong>
                     </Card.Title>
                </a>

                <Card.Text as='div'>
                   <strong>{news.title}</strong>
                </Card.Text>

                <Card.Text as='div'>
                   <strong>{news.description}</strong>
                </Card.Text>

                <Card.Text as='div'>
                   <strong>{news.content}</strong>
                </Card.Text>

                <Card.Text as='div'>
                   <h3>{news.author}</h3>
                </Card.Text>
                <Card.Text as='div'>
                   <h6>{news.publishedAt}</h6>
                </Card.Text>


            </Card.Body>
        </Card>
    )
}

export default News
