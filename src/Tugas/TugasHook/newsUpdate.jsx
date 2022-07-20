
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Button, Card, Row, Container, Col} from 'react-bootstrap';



const NewssUpdate = () => {

    const [getApi, setGetapi] = useState([])
   
    const getUsers = async () => {
        try{
            let response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=74f0cb22ba5245b493bd7b8ed4e8b130')
            setGetapi(response.data.articles)
        } catch(e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getUsers();
    }, [])

    return(
    <div>
    
        <Container className="fluid">
            <Row>
                {
                    getApi.map((user, idx) => {
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

export default NewssUpdate;




