import React from "react";
const Input = ({label, type, name, onChange}) => {
    return (
        <div>
        <label>{label}</label>
        <br />
        <input type={type} name={name} onChange={e => onChange(e.target.value) } />
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

export default class Validation extends React.Component{
    state = {
        email: '',
        password: '',
        errors: []
    }

    Submit = event => {
    event.preventDefault();
    const {email, password} = this.state;

    let message = [];
    
    if(email.length === 0) {
        message = [...message, 'email tidak boleh kosong'];
        alert(message);
    }  if(password.length === 0) {
        message = [...message, 'password tidak boleh kosong'];
        alert(message);
    }  if(password.length < 8) {
        message = [...message, 'password minimal 8 karakter harus mengandung angka dan huruf'];
        alert(message);
    }  
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(String(email).toLowerCase())) {
        message = [...message, 'Email tidak valid'];
    }

    if(message.length > 0) {
        this.setState({
            errors: message
        });

    } else {
        alert(`
        Hallo selamat datang ${this.state.email} login berhasil
        `);
        this.setState({
            errors: []
        })
    }
}
    render() {
        const style = {
            width : '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }
        
        return(
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <h4>Login Page</h4>
                <form onSubmit={this.Submit}>
                    <Input type="email" name="email" label="Email" onChange={value => this.setState({email: value})} />
                    <Input type="password" name="password" label="Passsword" onChange={value => this.setState({password: value})}/>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}