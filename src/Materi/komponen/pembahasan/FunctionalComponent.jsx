const FunctionaComponent = () => {
return (<div>
   <h3>Daftar menu</h3> 
<ul>
    <li>Bakso</li>
    <li>Seblak</li>
    <li>Sate</li>
    <li>Sop</li>
</ul> 
</div>
)
}

const DaftarBarang = () => {
   return(
     <div>
        <table border={2}>
            <thead>
                <tbody>Sabun cuci</tbody>
                <tbody>Pasta gigi</tbody>
                <tbody>Sikat gigi</tbody>
            </thead>
            <tr>
                <tbody>Pocari sweat</tbody>
                <tbody>Air mineral</tbody>
                <tbody>Larutan</tbody>
            </tr>
        </table>
    </div>
   )
}
export default FunctionaComponent;
export {DaftarBarang};