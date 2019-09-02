import React from 'react';
import Navbar from './../../../Components/Layouts/Navbar';

export default function HowWorks(props) {
  return (
    <>
      <Navbar path={props.match.path} />
      <div className="content-generic">
        <h1>Como Funciona</h1>
      </div>
    </>
  );
}