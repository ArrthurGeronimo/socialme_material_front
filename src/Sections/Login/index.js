import React from 'react';
import Navbar from './../../Components/Layouts/Navbar';

export default function Login(props) {
  return (
    <>
      <Navbar path={props.match.path} />
      <div className="content-generic">
        <h1>Login</h1>
      </div>
    </>
  );
}