import React from 'react';
import Navbar from './../../../Components/Layouts/Navbar/index';

export default function Home(props) {
  return (
    <>
      <Navbar path={props.match.path} />
      <div className="content-generic">
        <h1>Home</h1>
      </div>
    </>
  );
}