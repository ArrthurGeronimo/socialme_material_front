import React, { useState, useEffect } from 'react';

export default function FormBeneficiary() {
  const [values, setValues] = useState({
    nome: '',
    sexo: '',
    nomeSocial: '',
    estadoCivil: '',
    rg: '',
    cpf: '',
    cns: '',
    pis: '',
    escolaridade: '',
    profissao: '',
    telefoneFixo: '',
    celular: '',
    email: '',
    pais: '',
    estado: '',
    cidade: '',
    //Nascimento
    dataNascimento: '',
    nacionalidade: '',
    paisNascimento: '',
    estadoNascimento: '',
    cidadeNascimento: '',
    //
    maisInformacoes: ''
  });
  const handleChange = name => event => {
    this.setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
          <h1 className="display-4">Dados</h1>
          </div>
        </div>
        <fieldset className="form-group">
          <label className="bmd-label-floating">label-floating</label>
          <input 
            type="email" 
            className="form-control"
            value={values.teste}
            onChange={handleChange('teste')}
          />
          <span className="bmd-help">We'll never share your email with anyone else.</span>
          </fieldset>
        </div>
      </div>
    </>
  );
}