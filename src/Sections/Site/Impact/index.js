import React from 'react';
import Navbar from './../../../Components/Layouts/Navbar';

export default function Impact(props) {
  return (
    <>
      <Navbar path={props.match.path} />
      <div className="content-generic">
        <h1>Impacto</h1>
      </div>
    </>
  );
}