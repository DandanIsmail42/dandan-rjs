import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navibar = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link to="/home">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/contact">Data</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            </div>
    )
}
export default Navibar;


