import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'
import { Link } from "react-router-dom";
import Google from './assets/Google.png'
import Apple from './assets/Apple.png'
import Sesion from './assets/Sesion.png'



export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
        .then(res => {
            console.log(res);
            
            if (res.status === 200) {
                alert(' Ingrsando a nuestro sistema')
                navigate('/Inicio');
            }
        })
        .catch(err => {
            console.log(err);
            alert('Usuario no registrado')
            
        });
};

return (

    <div className="container">
        <form onSubmit={handleSubmit}>
            <img src={Sesion} alt="" />
            <h2>Iniciar sesion</h2>
            <input type="email"
                        placeholder="Ingresa tu correo"
                        className="input"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>

            <input type="password"
                        placeholder="Ingresa tu contraseña"
                        className="input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>

            <button className="button-submit" type="submit">Iniciar sesion</button>
            <div className="line"></div>

            <div className="flex-row">
                <button className="btn google"><img src={Google} alt="" />Google</button>
                <button className="btn apple"><img src={Apple} alt="" />Apple</button>
            </div>

            <p>¿No tienes una cuenta? <Link to="/Register">Registro</Link></p>

        </form>
    </div>
    
    );
}


