import React from 'react';
import Navbar from './../../../Components/Layouts/Navbar';

export default function About(props) {
  return (
    <>
      <Navbar path={props.match.path} />
      <div className="content-generic">
        <h1>Sobre</h1>
      </div>
    </>
  );
}