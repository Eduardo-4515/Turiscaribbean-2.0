import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import './Navbar.css'


export function Navbar(){
    return(
        <div className="Navbar">
            <div className="log-img">
            <Link to=""><img src={logo} alt="logo"/></Link>
            <h2 className="titulo">Turiscaribbean</h2>
            </div>
            <nav className="Navigation">
                <ul>
                    <li><Link to="/Peticiones">Peticiones</Link></li>
                    <li><Link to="/Sitios">Sitios</Link></li>
                    <li><Link to="/Login">Inicio de sesion</Link></li>
                </ul>
                <div className="group">
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g>
                    </svg>
                    <input placeholder="Búsqueda" type="search" className="input" />
                </div>
            </nav>
            
        </div>
    )
}