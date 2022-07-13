import { Col, Container, Row } from "react-bootstrap";
import TugasLifeCycle from "./Tugas/TugasLifeCycle";
import InputNews from "./Tugas/TugasLifeCycle/Inputnews";
import NavbarLc from "./Tugas/TugasLifeCycle/NavbarLc";


function App() {
  return (
    <div className="App">
      <NavbarLc />
      <Container className="fluid">
        <Row>
           <TugasLifeCycle />
           <Col>
              <InputNews />
           </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
