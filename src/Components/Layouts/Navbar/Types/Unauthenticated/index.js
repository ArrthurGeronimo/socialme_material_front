import React from 'react';
import { Link } from "react-router-dom";
import Logo from './../../../../../Assets/Images/logo.png';

export default function NavbarUnauthenticated() {
    return (
        <>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand" to={`/`} >
                <img src={Logo} alt="Logo Social Me" />
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Sobre
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                <Link to={`/registro`}>
                  <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Registro</button>
                </Link>
                <Link to={`/entrar`}>
                  <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Entrar</button>
                </Link>
              </div>
            </div>
          </nav>
        </>
    );
}