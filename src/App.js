// import { Col, Container, Row } from "react-bootstrap";
// import TugasLifeCycle from "./Tugas/TugasLifeCycle";
// import InputNews from "./Tugas/TugasLifeCycle/Inputnews";
// import NavbarLc from "./Tugas/TugasLifeCycle/NavbarLc";
// import CobaAja from "./Materi/komponen/pembahasan/Hook/cobacoba/CobaAja";
// import TugasHook from "./Tugas/TugasHook";

import {BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import About from "./Tugas/TugasRouter/Pages/About";

import Home from "./Tugas/TugasRouter/Pages/Home";
import Navibar from "./Tugas/TugasRouter/Pages/Navibar";
import Datas from "./Tugas/TugasRouter/Pages/Datas";



// import Hook from "./Materi/komponen/pembahasan/Hook";


function App() {
  return (
    <Router>
      <Navibar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Datas />} />
      </Routes>
    </Router>
   
  );
}

export default App;




/* <CobaAja /> */
 /* <TugasHook /> */
/* <NavbarLc />
      <Container className="fluid">
        <Row>
           <TugasLifeCycle />
           <Col>
              <InputNews />
           </Col>
        </Row>
      </Container> */