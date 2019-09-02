import React from 'react';
import { Link } from "react-router-dom";
import Logo from './../../../../../Assets/Images/logo.png';

export default function NavbarUnauthenticated() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbarUnauthenticated">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link className="navbar-brand" to={`/`}>
                    <img src={Logo} alt="Logo Social Me" />
                </Link>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Sobre</a>
                            <div className="dropdown-menu">
                                <Link to={`/sobre`} className="dropdown-item">
                                    Sobre nós
                                </Link>
                                <Link to={`/como-funciona`} className="dropdown-item">
                                    Como Funciona
                                </Link>
                                <Link to={`/onde-estamos`} className="dropdown-item">
                                    Onde Estamos
                                </Link>
                                <Link to={`/impacto`} className="dropdown-item">
                                    Impacto
                                </Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to={`/blog`} className="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/doe`} className="nav-link">
                                Doe
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav nav-items-right">
                        <li className="nav-item active">
                            <Link to={`/registro`} className="nav-link">
                                Registro
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/entrar`} className="nav-link">
                                Entrar
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}