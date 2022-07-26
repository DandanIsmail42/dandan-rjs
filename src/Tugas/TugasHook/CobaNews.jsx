
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

const CobaNews = () => {
    const [idn, setIdn] = useState('');
    const [used, setUsed] = useState([]);
    

    const newLocal = async () => {

        try {
            let resp = await axios.get(`https://newsapi.org/v2/everything?q=${idn}&apiKey=0e57b96a91774c25b707c31a0b64342b`);
            setUsed(resp.data.articles);
        } catch (e) {
            console.log(e.messange);
        }
    };
    const getApi = newLocal

    useEffect(() => {
        getApi();
        }, [getApi, idn])

    return(
        <div>
            <Form >
                <InputGroup className="mt-5 p-4">
                    <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={idn}
              onChange={(e) => setIdn(e.target.value)}
            />
            
            </InputGroup>
            </Form>
            <Container className="fluid">
                <Row>
                    {
                        used.map((user, idx) => {
                            return(
                    <Col key={idx} md={4} >
                        <Card className="mb-5">
                            <Card.Img variant="top" src={user.urlToImage} />
                             <Card.Body>
                                    <Card.Title>{user.title}</Card.Title>
                                        <Card.Text>{user.description}</Card.Text>
                            <p>{user.publishedAt}</p>
                            <Button href={user.url} variant="primary">GO link</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                            )
                        })
                    }
                </Row>
            </Container>
    
        </div>
            
           
        )
}

export default CobaNews;