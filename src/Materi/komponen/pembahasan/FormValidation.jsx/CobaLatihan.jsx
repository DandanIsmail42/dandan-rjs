import React from "react";

export default class CobaLatihan extends React.Component{
    state = {
        namaBarang: '',
        jenisBarang: '',
        Alamat: '',
        jenisPengiriman: ''
    }

    ClickSubmit = (e) => {
        e.preventDefault();
        alert(`
            Pesanan Sedang di proses

            Detail Pesanan :

            Nama Barang : ${this.state.namaBarang}
            Jenis Barang : ${this.state.jenisBarang}
            Alamat : ${this.state.Alamat}
            Jenis Pengiriman : ${this.state.jenisPengiriman}
        `)
    }

    render() {
        return(
            <div>
                <form>
                    <label>
                       Nama Barang : <input type="text" name="namaBarang" onChange={e => this.setState({namaBarang: e.target.value}, () => console.log(this.state))} />
                    </label>
                    <br />
                    <select name="jenisBarang" onChange={e => this.setState({jenisBarang: e.target.value}, () => console.log(this.state))} >
                        <option value="">jenisBarang</option>
                        <option value="makanan">makanan</option>
                        <option value="minuman">minuman</option>
                        <option value="mainan">mainan</option>
                        <option value="otomotif">otomotif</option>
                    </select>

                    <br />
                    <label >
                       Alamat : <textarea name="Alamat" cols="30" rows="10" onChange={e => this.setState({Alamat: e.target.value}, () => console.log(this.state))}></textarea>
                    </label>
                    
                    <br />
                    <label>
                        Jenis Pengiriman : 
                        <br />
                        <input type="radio" value="COD" name="pembayaran" onChange={e => this.setState({pembayaran: e.target.value}, () => console.log(this.state))}/> COD 
                        <br />
                        <input type="radio" value="Cash" name="pembayaran" onChange={e => this.setState({pembayaran: e.target.value}, () => console.log(this.state))} /> CASH
                       
                    </label>
                    <br />
                    <br />
                    <input type="submit" onClick={this.ClickSubmit} />
                </form>
            </div>
        )
    }
}