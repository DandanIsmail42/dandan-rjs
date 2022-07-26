import { useEffect } from "react";
import { useState } from "react";
import { Table, Container } from "react-bootstrap";
const Datas = () => {
    const [users, setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(ress => ress.json())
            .then(ress => setUser(ress));
    })

    return(
        <div className="py-5 mt-4">
            <Container>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>NO</th>
          <th> Name</th>
          <th>Phone</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((user, idx) => {
                return(
            <tr key={idx}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
            </tr>
                )
            })
        }
      </tbody>
    </Table>
            </Container>
        </div>
    )
}
export default Datas;