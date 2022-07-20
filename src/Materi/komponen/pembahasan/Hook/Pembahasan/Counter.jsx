// import { useState } from "react";

import { useState } from "react"

// const Counter = () => {
//     let [count, setCount] = useState(0);

  

//     return(
//         <div>
//             <button  onClick={() => setCount(count - 1)}>-</button>
            
//             {' '} <span>{count}</span> {' '}

//             <button onClick={() => setCount(count + 2)}>+</button>
//         </div>
//     )
// }
// export default Counter;



// const Toggle = () => {
//     let [toggle, setToggle] = useState('klik di atas');
//     return(
//         <div>
//             <button onClick={() => setToggle(toggle = 'Hallo selamat dtang')}>Toggle</button>
//             <h1>{toggle}</h1>
//         </div>
//     )
// }

// export default Toggle;

const Toggle = () => {
    let [Klik, setKlik] = useState(' Klik tombol di atas');
    return(
        <div>
            <button onClick={() => setKlik(Klik = ' Selamat mendapatkan 1 juta rupiah')}>Give away</button>
            <h1>{Klik}</h1>
        </div>
    )
}

export default Toggle;