import React from 'react';
import { Link } from "react-router-dom";
import Logo from './../../../../../Assets/Images/logo.png';

export default function NavbarUnauthenticated() {
    return (
        <>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand" to={`/`} >
              <img src={Logo} alt="Logo Social Me" />
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sobre
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
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
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </div>
          </nav>
        </>
    );
}