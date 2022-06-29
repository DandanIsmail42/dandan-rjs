import React from "react";
import './StylingPortfolio.css'; 

export default class Portfolio extends React.Component {

    render() {
        return(
            <body>
        <div>
            <div className="jumbotron">
           <h2>Hello guys !! <br /> 
           Perkenalkan Nama saya Dandan Ismail, Selamat datang di website saya</h2>
            </div>
            <div class="bio">
     <h3>Biografi</h3>   
     <br />
    <table>
    <tr >
        <td>
            <p>Hallo perkenalkan nama saya DANDAN ISMAIL,  saya siswa dari eduwork program ISA. Saya  lulusan Diploma III Manajemen informatika,  saat ini berusia 23 tahun.</p>
    
        </td>
        <td>
            <p>Saya berdomisili di sukabumi jawa barat, saat ini  saya berusia 23 moto hidup saya  "lebih baik kehilangan masa muda daripada kehilangan masa depan"</p>
        </td>
    </tr>
    
    </table>
    
    </div>

    <div class="skills">
        <h3>Skills :</h3>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
     </ul>   
    </div>
    <div class="contact">
    <h3>Contact Me</h3>
    <label >Email :</label>
    <input type="text" />
    <br />
    <label>Massage :</label>
    <textarea cols="30" rows="5"></textarea>
    <br />
     
    </div>
   
   <footer>
     <h6>Copyright &copy;2022 || Design by : Dandan Ismail </h6>
   </footer>
   
        </div>
            </body>
        )
    }
}