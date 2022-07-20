// import DataTable from "./DataTable";

// import CobaNews from "../../../../../Tugas/TugasHook/CobaNews";


const CobaHook = () => {


    return(
        <div>
            {/* <DataTable /> */}
            {/* <CobaNews /> */}
        </div>
    )
}
export default CobaHook;



// import axios from "axios"
// import { useEffect } from "react"
// import { useState } from "react"
// import { Table } from "react-bootstrap"


// const DataTable = () => {
    
//     // const [identifier, setIdentifier] = useState(1)
//     const [identifier, setIdentifier] = useState(1)
//     const [user, setUser] = useState([])
    
//     const getUser = async () => {
//         try {
//         let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
//         setUser(res.data);
//     } catch (e) {
//         console.log(e.massange);
//     }
//     };
    
//     useEffect(() => {
//         getUser();
//     }, [ identifier ])
   
//     return(
//         <div className="py-5">
//             <input type="text" 
//             name="identifier"
//             value={identifier}
//             onChange={(e) => setIdentifier(e.target.value)}
//             autoFocus />
//             <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>NO</th>
//           <th>Name</th>
//           <th>Phone</th>
//           <th>Username</th>
//           <th>Website</th>
//         </tr>
//       </thead>
//       <tbody>
//       <tr>
//             <td>{user.id}</td>
//             <td>{user.name}</td>
//             <td>{user.phone}</td>
//             <td>{user.username}</td>
//             <td>{user.website}</td>
//         </tr>
            
        
        
//       </tbody>
//     </Table>
//         </div>
//     )
// }
// export default DataTable;