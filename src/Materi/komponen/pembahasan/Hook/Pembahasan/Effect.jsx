// import axios from "axios";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Effect = () => {
    // let [text, setText] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [name, setName] = useState('');

    const klikBtn = (e) => {
        e.preventDefault();
        setName(`${firstname} ${lastname}`);
        if(firstname === '') {
            alert('nama tidak boleh kosong');
        } if(lastname === '') {
            alert('nama tidak boleh kosong');
        } else{
             alert(`Hallo ${firstname} ${lastname}`);
        }
       
        setFirstname('');
        setLastname('');

    }

    return(
        <div className='p-5'>
    <Form onSubmit={klikBtn} className='container-fluid'>
      <Row>
        <Col className='col-md-12 mb-2'>
          <Form.Control type='text' name='firstname' placeholder="First name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        </Col>
        <br />
        <Col className='col-md-12'>
          <Form.Control type='text' name='lastname' placeholder="Last name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
        </Col>
      </Row>
      <Button type='submit' className='mt-2' variant="primary">Primary</Button>
      <h1>My name is  { name ? name : '. . . '}</h1>
    </Form>
        </div>
    )
}

export default Effect;