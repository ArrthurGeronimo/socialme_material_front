import React, { useState, useEffect } from 'react';
import Navbar from './../../Components/Layouts/Navbar';
import FormBeneficiary from './Components/FormBeneficiary/index';
import './style.css';

export default function Register(props) {
  const [values, setValues] = useState({
    visualizacaoAtiva : 'Beneficiário'
  });
  /*
  useEffect(() => {
    console.log('useEffect');
    console.log(values);
  }, [values.visualizacaoAtiva]);
  */
  const handleChange = name => event => {
    this.setValues({ ...values, [name]: event.target.value });
  };

  const alternarVisualizacao = (visualizacao) => {
    setValues({ ...values, visualizacaoAtiva: visualizacao });
  }
  const renderizaVisualizacao = () => {
    switch (values.visualizacaoAtiva) {
      case 'Beneficiário':
        return <FormBeneficiary />;
      case 'Fornecedora':
        return console.log('VISUALIZACAO FORN');
    }
  }

  return (
    <>
      <Navbar path={props.match.path} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="nav nav-tabs bg-tab-registro">
              <li className={"nav-item "+(values.visualizacaoAtiva === 'Beneficiário' ? 'active' : '')}
              onClick={() => alternarVisualizacao('Beneficiário')}>
                <i className="far fa-smile"></i>
                <a className="nav-link" href="#">Pessoa Física</a>
              </li>
              <li className={"nav-item "+(values.visualizacaoAtiva === 'Fornecedora' ? 'active' : '')}
              onClick={() => alternarVisualizacao('Fornecedora')}>
                <i className="far fa-handshake"></i>
                <a className="nav-link" href="#">Pessoa Jurídica</a>
              </li>
            </ul>
          </div>

          {renderizaVisualizacao()}
      
        </div>
      </div>
    </>
  );
}