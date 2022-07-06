import React from "react";

export default class Input extends React.Component{
    state = {
        nama: '',
        jurusan: '',
        gender: '',
        member: false,
        Alamat: ''
    }
    HandleSubmit = (e) => {
        e.preventDefault();
        alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        member: ${this.state.member ? 'YES' : 'NO'}
        Alamat: ${this.state.Alamat}
        `);
       this.setState({
        nama: '',
        jurusan: '',
        gender: '',
        member: false,
        Alamat: ''
        } )
    }

    render() {
        return(
            <div>
                <form>
                    
                    <label>Username : 
                        <input type="text"
                         name="nama"
                          onChange={e => this.setState({nama: e.target.value}, ()=> console.log(this.state))} value={this.state.nama}/>
                    </label>
                    <br />

                    <select name="Jurusan"
                     onChange={e => this.setState({jurusan: e.target.value}, () =>
                     console.log(this.state))} checked={this.state.jurusan} >
                        <option value="">Pilih Jurusan</option>
                        <option value="Teknik Informatika">Teknik Informatika</option>
                        <option value="Manajemen Informatika">Manajemen Informatika</option>
                        <option value="Sistem Infromasi">Sistem Informasi</option>
                        <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                    </select>
                    <br />

                    <label>Jenis kelamin : <input type="radio" value="Laki-laki" name="gender" onChange={e => this.setState({gender: e.target.value}, () => console.log(this.state))} defaultChecked={this.state.gender}/> : Laki -Laki <br />
                    <input type="radio" value="Perempuan" name="gender" onChange={e => this.setState({gender: e.target.value}, () => console.log(this.state))} checked={this.state.gender}/> : Perempuan </label> 
                    <br />

                    <label>Member <input type="checkbox" name="member" checked={this.state.member} onChange={e => this.setState({member: e.target.checked}, () => console.log(this.state))} value={this.state.member}/></label>
                    <textarea name="Alamat" cols="30" rows="10" onChange={e => this.setState({Alamat: e.target.value}, () => console.log(this.state))} value={this.state.Alamat}>Alamat :</textarea>

                    <br />

                    <br />
                    <input type="submit" onClick={this.HandleSubmit} />
                </form>
            </div>
        ) 
    }
}