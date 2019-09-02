import React from 'react';
import Navbar from './../../../Components/Layouts/Navbar';

export default function WhereAreWe(props) {
  return (
    <>
      <Navbar path={props.match.path} />
      <div className="content-generic">
        <h1>Onde Estamos</h1>
      </div>
    </>
  );
}