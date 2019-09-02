import React from 'react';
import { Link } from "react-router-dom";
import Logo from './../../../../../Assets/Images/logo.png';

export default function NavbarUnauthenticated() {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbarSimple">
            <div className="container">
              <Link className="navbar-brand" to={`/`} >
                <img src={Logo} alt="Logo Social Me" />
              </Link>
            </div>
          </nav>
        </>
    );
}