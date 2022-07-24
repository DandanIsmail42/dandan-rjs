// import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Table from 'react-bootstrap/Table';
const CobaAja = () => {
    const [ketik, setKetik] = useState('')
    const [data, setData] = useState([])

   
    useEffect(() => {
            if(ketik === 'dandan') {
                 fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(res => setData(res));
                alert('Login berhasil');
            }
           
    }, [ketik]);

    return(
        <div>
        <div>
            <input type="text"
            value={ketik}
            onChange={(e) => setKetik(e.target.value)} />
        </div>
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
            data.map((user, idx) => {
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
        </div>

    )
}

export default CobaAja;