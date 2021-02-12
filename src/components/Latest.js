import React from "react";
import { Container,Row,Col,Image, ListGroup } from "react-bootstrap";

export default class Latest extends React.Component {
  state = {
    loading: true,
    person: null,
  };
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0],loading:false });
    console.log(data.results[0]);
  }
  render() {

    if(this.state.loading){
        return <div>loading....</div>
    }

    if(!this.state.person){
        return <div>didn't get a person</div>
    }
    return (
    //   <div>
    //     {this.state.loading || !this.state.person ? (
    //       <div>loading...</div>
    //     ) : (
          <div>
              {/* <div>{this.state.person.name.first}</div>
              <div>{this.state.person.name.last}</div>
              <img src={this.state.person.picture.large} />
 */}
          <Row>
            <Col md={6}>
            <Image src={this.state.person.picture.large} alt={this.state.person.name.first} />
            </Col>
            <Col md={3}>
               <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <h1>{this.state.person.name.first}</h1>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h1>{this.state.person.location.timezone.description}</h1>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h1>{this.state.person.name.first}</h1>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h1>{this.state.person.name.first}</h1>
                    </ListGroup.Item>
               </ListGroup>
            </Col>
          </Row>
          </div>
        //)}
      //</div>
    );
  }
}
