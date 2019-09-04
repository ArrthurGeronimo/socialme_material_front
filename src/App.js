import React from 'react';
import { Route, Switch } from "react-router-dom";

//import css module
import 'react-flags-select/css/react-flags-select.css';
//OR import sass module
import 'react-flags-select/scss/react-flags-select.scss';
import './App.css';
import Home from './Sections/Site/Home/index';
import About from './Sections/Site/About/index';
import HowWorks from './Sections/Site/HowWorks/index';
import Impact from './Sections/Site/Impact/index';
import WhereAreWe from './Sections/Site/WhereAreWe/index';
import Blog from './Sections/Blog/index';
import Donate from './Sections/Donate/index';
import Register from './Sections/Register/index';
import Login from './Sections/Login/index';


export default function App() {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sobre" component={About} />
      <Route path="/como-funciona" component={HowWorks} />
      <Route path="/onde-estamos" component={WhereAreWe} />
      <Route path="/impacto" component={Impact} />
      <Route path="/doe" component={Donate} />
      <Route path="/blog" component={Blog} />
      <Route path="/registro" component={Register} />
      <Route path="/entrar" component={Login} />
    </Switch>
  );
}