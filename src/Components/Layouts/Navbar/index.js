import React from 'react';
import './style.css';
import Unauthenticated from './Types/Unauthenticated';
import Simple from './Types/Simple';

export default function Navbar(props) {

  if (props.path === '/registro' || props.path === '/entrar'){
    return (
      <Simple />
    );
  }else{
    return (
      <Unauthenticated />
    );
  }
}