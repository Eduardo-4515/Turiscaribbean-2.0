import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('');
    const [number, setNumber] = useState('');
    const [tel, setTel] = useState('');
    const navigate = useNavigate();
    

    async function handleSubmit(e) {
        e.preventDefault(); // Evita que el formulario recargue la página
    

        const response = await axios.post('http://localhost:8081/register', { email, password, text, number, tel })
        .then((res) => {
            console.log(res)
            if ( res.status == 201 ){
                console.log("alert")
                alert("Registro exitoso!");
                navigate('/login', { replace: true });
            }
        })
        .catch((err) => {
            console.log(err)
        })

    }

    return (
        
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Registro</h1><br />
                <div className="contenido">
                    <div className="inputs">
                        <input type="email" placeholder='ingrese su correo' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <input type="text" placeholder="Nombre completo" value={text} onChange={(e) => setText(e.target.value)} required  />
                        <input type="number" placeholder="Documento"value={number} onChange={(e) => setNumber(e.target.value)} required  />
                        <input type="tel" placeholder="telefono" value={tel} onChange={(e) => setTel(e.target.value)} required  />

                    </div><br />
                    <div className="bton">
                        <button className='btn' type="submit"><Link to="/Login">Volver</Link></button>
                        <button className='btn' type="submit">Crear usuario</button>
                    </div><br />
                </div>
                <p>Al crear usuario usted <span>acepta los términos y condiciones.</span></p>
            </form>
        </div>
);
}

export default Register;

