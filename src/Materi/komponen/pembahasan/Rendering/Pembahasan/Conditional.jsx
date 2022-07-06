import React from "react";

export default class Conditional extends React.Component{
    state = {
        Loading: parseInt(prompt('Masukan user ID anda'))
    }

    render() {
        
        setTimeout(() => {
            this.setState({
                Loading: false
            })
        }, 3000)

        return(
            <div>
                { this.state.Loading ? <h1>Loading ..</h1> : <h1>Selamat datang</h1> }
            </div>
        )
    }
}
    









    
    //     const ItsLogin = true;
    //     let Massege = '';
    //     if(ItsLogin){
    //         Massege = 'Selamat anda berhasil login'
    //     } else {
    //             Massege = 'Anda gagal login'
           
    //     }
    //    return(
    //     <div><h1>{ItsLogin ? <h1>Selamat anda berhasil login</h1> : <h1>Anda gagal login</h1> }</h1></div>
    //    )