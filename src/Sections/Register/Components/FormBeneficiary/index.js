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
              <div className="ui horizontal divider">Dados</div>
              
              <div className="form-group">
                <label className="form-label">Nome do Plano</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Digite o nome do servidor (Ex. Servidor Inicial)"
                    value={values.nome}
                    onChange={handleChange('nome')}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}