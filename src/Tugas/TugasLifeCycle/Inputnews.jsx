import axios from "axios";
import React from "react";
import { Card, Col, Form, InputGroup } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


import "./InputStyle.css"
export default class InputNews extends React.Component{
  constructor() {
    super() 
    this.state = {
      search: '',
      users: []
    }
  }
    componentDidMount(){
      const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=74f0cb22ba5245b493bd7b8ed4e8b130"

      axios.get(url)
        .then( users => {
          console.log(users.data.articles);
          this.setState({
            users: users.data.articles
          })
        })
    }


    render() {
    
        return(
    <div>
      <div>
      {this.state.users.map((user, idx) => {
        return(
          <div key={idx}>
           <InputGroup className="mb-3 mt-4">
        <Form.Control
          placeholder="Seacrch news update"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>
        <Col>
        <Card>
          <Card.Img variant="top" src={user.urlToImage} />
          <Card.Body>
            <Card.Title>{user.title}</Card.Title>
            <Card.Text>{user.description}</Card.Text>
            <Button href={user.url} variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        </Col>
          </div>
        ) 
      })}
    </div>
    </div>
          
    
        )
    }
}