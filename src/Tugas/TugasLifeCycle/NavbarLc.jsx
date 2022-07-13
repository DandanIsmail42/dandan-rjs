import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default class NavbarLc extends React.Component{

    render() {
        return(
            <div> 
    <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">News Update</Navbar.Brand>
        </Container>
    </Navbar>
            </div>
        )
    }
}