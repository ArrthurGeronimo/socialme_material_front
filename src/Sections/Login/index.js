import React from 'react';
import Navbar from './../../Components/Layouts/Navbar';
import FormLogin from './Components/FormLogin';

export default function Login(props) {
  return (
    <>
      <Navbar path={props.match.path} />
      <FormLogin />
    </>
  );
}