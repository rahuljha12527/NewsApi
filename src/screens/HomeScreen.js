import React from 'react';
import {Row,Col} from  'react-bootstrap';
import News from '../components/News'
import newsData from '../news';

const HomeScreen = () => {
  //  console.log("news",news)
    return (
        <>
         <h1>Latest News</h1>
      
            <Row>
               {newsData.map((news)=>(
                   <Col sm={12} md={6} lg={4} xl={3}>
                    <News news={ news} />
                   </Col>
               ))}
            </Row>
        </>
    )
}

export default HomeScreen
