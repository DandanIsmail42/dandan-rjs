import React from "react";
const Input = ({label, type, name, onchange}) => {
    return(
        <div>
        <label>{label}</label>
        <br />
        <input type={type} name={name} onChange={e => onchange(e.target.value)} />
        <br />
    </div>
    )
}

const ShowErrors =({errors}) => {
    return(
        <ul style={{color: 'red'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}
export default class FormRegistrasi extends React.Component{
    state = {
        email: '',
        password: ''
    }

    ClickSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;
    let message = [];
    
    if(email.length === 0) {
        message = [...message, 'email tidak boleh kosong'];
    }  if(password.length === 0) {
        message = [...message, 'password tidak boleh kosong'];
    }  if(password.length < 8) {
        message = [...message, 'password minimal 8 karakter harus mengandung angka dan huruf'];
    }  
    // const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // if(!re.test(String(email).toLowerCase())) {
    //     message = [...message, 'Email tidak valid'];
    // }

    if(message.length > 0) {
        this.setState({
            errors: message
        });

    } else {
        alert(`
        Hallo selamat datang
        email: ${this.state.email}
        password: ${this.state.password} login berhasil
        `);
         this.setState({
            errors: []
        });

        this.setState({
            email: '',
            password: ''
        });
        
    } 
    }


    render() {
        const style = {
            width : '300px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '40px'
        }
        const StyleBtn = {
            border: '1px solid white',
            background: 'lightblue',
            borderRadius: '20px',
            width: '100px'
           
        }
        return(
            <div style={style}>
                 {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <h4>Login Pages</h4>
                <br />
                <form onSubmit={this.ClickSubmit} >
                    <Input type="email"
                     name="email"
                      label="Email"
                       onchange={value => this.setState({email: value})}        Value={this.state.email} />
                    <Input type="password"
                     name="password"
                      label="Password"
                       onchange={value => this.setState({password: value})}     Value={this.state.password}/>
                      <br />
                      <button style={StyleBtn} type="submit">Kirim</button>
                </form>
            </div>
        )
    }
}