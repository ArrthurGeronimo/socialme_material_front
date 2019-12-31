import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import api from './../../../../Services/api';
import { dataBrasileiraMask } from './../../../../Services/masks';
import imagem1 from './../../../../Assets/Images/overlayDoador1.png';
import imagem2 from './../../../../Assets/Images/overlayDoador2.png';
import imagem3 from './../../../../Assets/Images/overlayDoador3.png';
import imagem1Hover from './../../../../Assets/Images/overlayDoador1Hover.png';
import imagem2Hover from './../../../../Assets/Images/overlayDoador2Hover.png';
import imagem3Hover from './../../../../Assets/Images/overlayDoador3Hover.png';
import isometric from './../../../../Assets/Images/isometric.png';
import isometric2 from './../../../../Assets/Images/isometric2.png';

import pngBonequinho from './../../../../Assets/Images/pngBonequinho.png';
import gifBonequinho from './../../../../Assets/Images/gifBonequinho.gif';
import pngMaosCoracao from './../../../../Assets/Images/pngMaosCoracao.png';
import gifMaosCoracao from './../../../../Assets/Images/gifMaosCoracao.gif';

import Alert from './../../../../Components/Alert';

export default function FormBeneficiary() {
  const [values, setValues] = useState({
    nome: '',
    nomeSocial: '',
    sexo: '',
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
    //Outros
    maisInformacoes: '',
    beneficiaria: false,
    doadora: false,
    fornecedora: false,
    //Ações
    paisSelecionado: false,
    estadoSelecionado: false,
    paisNascimentoSelecionado: false,
    estadoNascimentoSelecionado: false,
    jsonEstadosCidades: [],
    overlayAberto: false,
    mouseEnterDoador: false,
    mostrarAlerta: false,
    typeAlerta: '',
    positionAlert: '',
    textAlert: '',
    redirect: false
  });
//HANDLE CHANGE
  const handleChange = name => event => {
    switch(name) {
      case 'dataNascimento':
        return setValues({ ...values, [name]: dataBrasileiraMask(event.target.value) });
      case 'beneficiaria':
      case 'doadora':
      case 'fornecedora':
        if(event.target.value === 'true'){
          return setValues({ ...values, [name]: true });
        }else if(event.target.value === 'false'){
          return setValues({ ...values, [name]: false });
        } 
      default:
        return setValues({ ...values, [name]: event.target.value });
    }
  };
//QUANDO ALTERA O STATUS DE DOADOR
useEffect(() => {
  if(values.overlayAberto){
    cadastrarBeneficiario();
  }
}, [values.doador]);
//ÚNICA VEZ
  useEffect(() => {
    lerEstadoCidades()
  }, []);
//LER ARQUIVO COM ESTADOS E CIDADES
  const lerEstadoCidades = () => {
    axios.get('./assets/files/estados-cidades.json')
      .then( response => {
        //console.log(response.data);
        setValues({ ...values, jsonEstadosCidades: response.data.estados });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
//QUANDO MUDAR O PAÍS
  useEffect(() => {
    setValues({ ...values, paisSelecionado: true });
  }, [values.pais]);
//QUANDO MUDAR O ESTADO
  useEffect(() => {
    setValues({ ...values, estadoSelecionado: true });
  }, [values.estado]);
//QUANDO MUDAR O PAÍS NASCIMENTO
  useEffect(() => {
    if(values.paisNascimento === "Brasil"){
      setValues({ ...values, paisNascimentoSelecionado: true, nacionalidade: 'Brasileiro(a)' });
    }
  }, [values.paisNascimento]);
//QUANDO MUDAR O ESTADO NASCIMENTO
  useEffect(() => {
    setValues({ ...values, estadoNascimentoSelecionado: true });
  }, [values.estadoNascimento]);
//OPÇÕES ESTADOS
  const renderOpcoesEstados = () => {
    if(values.paisSelecionado){
      return values.jsonEstadosCidades.map((item, index) => (
        <option key={index} value={item.nome}>{item.nome}</option>
      ));
    }
  }
//OPÇÕES CIDADES
  const renderOpcoesCidades = () => {
    if(values.estadoSelecionado){
      let indiceDoEstadoSelecionado = 0;
      for(let i = 0; i < values.jsonEstadosCidades.length; i++){
        if(values.jsonEstadosCidades[i].nome === values.estado){
          return values.jsonEstadosCidades[i].cidades.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ));
        }
      }
    }
  }
//OPÇÕES ESTADOS DE NASCIMENTO
  const renderOpcoesEstadosNascimento = () => {
    if(values.paisNascimentoSelecionado){
      return values.jsonEstadosCidades.map((item, index) => (
        <option key={index} value={item.nome}>{item.nome}</option>
      ));
    }
  }
//OPÇÕES CIDADES DE NASCIMENTO
  const renderOpcoesCidadesNascimento = () => {
    if(values.estadoNascimentoSelecionado){
      let indiceDoEstadoSelecionado = 0;
      for(let i = 0; i < values.jsonEstadosCidades.length; i++){
        if(values.jsonEstadosCidades[i].nome === values.estadoNascimento){
          return values.jsonEstadosCidades[i].cidades.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ));
        }
      }
    }
  }
//OVERLAY QUER SER UM DOADOR
  const abrirOverlayQuerSerUmDoador = () => {
    setValues({ ...values, overlayAberto: true });
  }
  const fecharOverlayQuerSerUmDoador = () => {
    setValues({ ...values, overlayAberto: false });
  }
//ANIMAÇÃO OVERLAY
  const mouseEnterDoador = () => {
    setValues({ ...values, mouseEnterDoador: true });
  }
  const mouseOutDoador = () => {
    setValues({ ...values, mouseEnterDoador: false });
  }
//CADASTRO
  const cadastrarComoDoador = () => {
    setValues({ ...values, doador: true });
  }
  const cadastrarSemDoador = () => {
    setValues({ ...values, doador: false });
  }
  const cadastrarBeneficiario = () => {
    const obj = {
      dados: {
        nome: values.nome,
        nomeSocial: values.nomeSocial,
        sexo: values.sexo,
        estadoCivil: values.estadoCivil,
        rg: values.rg,
        cpf: values.cpf,
        cns: values.cns,
        pis: values.pis,
        escolaridade: values.escolaridade,
        profissao: values.profissao,
        telefoneFixo: values.telefoneFixo,
        celular: values.celular,
        email: values.email,
        pais: values.pais,
        cidade: values.cidade,
        estado: values.estado,
        nascimento: {
          data: values.dataNascimento,  
          nacionalidade: values.nacionalidade,
          pais: values.paisNascimento,
          estado: values.estadoNascimento,
          cidade: values.cidadeNascimento
        }
      },
      maisInformacoes: values.maisInformacoes,
      beneficiaria: {
        status: values.beneficiaria
      },
      doadora: {
        status: values.doadora
      },
      fornecedora: {
        status: values.fornecedora
      }
    };

  console.log(obj);
  api.post('/person', obj)
  .then(res => {
      //console.log(res);
      if(res.data.status === 'success'){
        setValues({ 
          ...values, 
          mostrarAlerta: true,
          typeAlerta: 'success',
          positionAlert: 'top-right',
          textAlert: 'Pessoa Física Cadastrada com Sucesso',
        });
        setTimeout(
          function() {
            setValues({ 
              ...values, 
              redirect: true
            });
          },
          3000
        );
      }
    })
    .catch(function (error) {
      console.log(error);
    })
}

// Redirecionamento para a página de LOGIN
  const renderRedirect = () => {
    if (values.redirect) {
      return <Redirect to={{
        pathname: '/entrar'
      }} />
    }
  }
// Mostrar Alert
const renderAlerta = () => {
  if (values.mostrarAlerta) {
    return <Alert type={values.typeAlerta} position={values.positionAlert} text={values.textAlert} />
  }
}

  return (
    <>
      {renderRedirect()}
      {renderAlerta()}
      {/* CARD - DADOS */}
      <div className="card">
        <div className="card-body">
          <div className="row">

            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="ui horizontal divider">Dados</div>
            </div>
            {/* NOME */}
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div className="form-group">
                <label className="form-label">Nome Completo</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite seu nome completo"
                  value={values.nome}
                  onChange={handleChange('nome')}
                />
              </div>
            </div>
            {/* SEXO */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="form-group">
                <div className="form-label">Sexo</div>
                <div className="custom-controls-stacked">
                  <label className="custom-control custom-radio custom-control-inline">
                    <input 
                      type="checkbox" 
                      className="custom-control-input"
                      checked={values.sexo === 'Feminino' ? true : false}
                      value="Feminino"
                      onChange={handleChange('sexo')} 
                    />
                    <span className="custom-control-label">Feminino</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                  <input 
                      type="checkbox" 
                      className="custom-control-input"
                      checked={values.sexo === 'Masculino' ? true : false}
                      value="Masculino"
                      onChange={handleChange('sexo')} 
                    />
                    <span className="custom-control-label">Masculino</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                    <input 
                      type="checkbox" 
                      className="custom-control-input"
                      checked={values.sexo === 'Indefinido' ? true : false}
                      value="Indefinido"
                      onChange={handleChange('sexo')} 
                    />
                    <span className="custom-control-label">Indefinido</span>
                  </label>
                </div>
              </div>
            </div>
            {/* NOME SOCIAL */}
            <div className="col-sm-12 col-md-8 col-lg-8">
              <div className="form-group">
                <label className="form-label">Nome Social</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite seu nome social"
                  value={values.nomeSocial}
                  onChange={handleChange('nomeSocial')}
                />
              </div>
            </div>
            {/* ESTADO CIVIL */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="form-group">
                <label className="form-label">Estado Civil</label>
                <select 
                  className="form-control"
                  value={values.estadoCivil}
                  onChange={handleChange('estadoCivil')}
                >
                  <option value="">Selecione...</option>
                  <option value="Solteiro(a)">Solteiro(a)</option>
                  <option value="Casado(a)">Casado(a)</option>
                  <option value="Viúvo(a)">Viúvo(a)</option>
                  <option value="Separado(a) Judicialmente">Separado(a) Judicialmente</option>
                  <option value="Divorciado(a)">Divorciado(a)</option>
                </select>
              </div>
            </div>
            {/* RG */}
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="form-group">
                <label className="form-label">RG</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite seu RG"
                  value={values.rg}
                  onChange={handleChange('rg')}
                />
              </div>
            </div>
            {/* CPF */}
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="form-group">
                <label className="form-label">CPF</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite seu CPF"
                  value={values.cpf}
                  onChange={handleChange('cpf')}
                />
              </div>
            </div>
            {/* CNS */}
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="form-group">
                <label className="form-label">CNS</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite seu CNS"
                  value={values.cns}
                  onChange={handleChange('cns')}
                />
              </div>
            </div>
            {/* PIS */}
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="form-group">
                <label className="form-label">PIS</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite seu PIS"
                  value={values.pis}
                  onChange={handleChange('pis')}
                />
              </div>
            </div>
            {/* ESCOLARIDADE */}
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="form-group">
                <label className="form-label">Escolaridade</label>
                <select 
                  className="form-control"
                  value={values.escolaridade}
                  onChange={handleChange('escolaridade')}
                >
                  <option value="">Selecione...</option>
                  <option value="Analfabeto">Analfabeto</option>
                  <option value="Ensino fundamental incompleto">Ensino fundamental incompleto</option>
                  <option value="Ensino fundamental completo">Ensino fundamental completo</option>
                  <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                  <option value="Ensino médio completo">Ensino médio completo</option>
                  <option value="Superior completo">Superior completo</option>
                  <option value="Pós-graduação">Pós-graduação</option>
                  <option value="Mestrado">Mestrado</option>
                  <option value="Doutorado">Doutorado</option>
                  <option value="Pós-Doutorado">Pós-Doutorado</option>
                </select>
              </div>
            </div>
            {/* EMAIL */}
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite sua Email"
                  value={values.email}
                  onChange={handleChange('email')}
                />
              </div>
            </div>
            {/* TELEFONE FIXO */}
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="form-group">
                <label className="form-label">Telefone Fixo</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite o número do seu Telefone Fixo"
                  value={values.telefoneFixo}
                  onChange={handleChange('telefoneFixo')}
                />
              </div>
            </div>
            {/* CELULAR */}
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="form-group">
                <label className="form-label">Celular</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite o número do seu Celular"
                  value={values.celular}
                  onChange={handleChange('celular')}
                />
              </div>
            </div>
            {/* PAÍS */}
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="form-group">
                <label className="form-label">País</label>
                <select 
                  className="form-control"
                  value={values.pais}
                  onChange={handleChange('pais')}
                >
                  <option value="">Selecione...</option>
                  <option value="Brasil">Brasil</option>
                </select>
              </div>
            </div>
            {/* ESTADO */}
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="form-group">
                <label className="form-label">Estado</label>
                <select 
                  className={"form-control "+(values.paisSelecionado ? '' : 'select-disable')}
                  value={values.estado}
                  onChange={handleChange('estado')}
                >
                  {renderOpcoesEstados()}
                </select>
              </div>
            </div>
            {/* CIDADE */}
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="form-group">
                <label className="form-label">Cidade</label>
                <select 
                  className={"form-control "+(values.estadoSelecionado ? '' : 'select-disable')}
                  value={values.cidade}
                  onChange={handleChange('cidade')}
                >
                  {renderOpcoesCidades()}
                </select>
              </div>
            </div>
            {/* PROFISSÃO */}
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="form-group">
                <label className="form-label">Profissão</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite sua Profissão"
                  value={values.profissao}
                  onChange={handleChange('profissao')}
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="ui horizontal divider">Informações do Nascimento</div>
            </div>
            {/* PAÍS NASCIMENTO */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="form-group">
                <label className="form-label">País do Nascimento</label>
                <select 
                  className="form-control"
                  value={values.paisNascimento}
                  onChange={handleChange('paisNascimento')}
                >
                  <option value="">Selecione...</option>
                  <option value="Brasil">Brasil</option>
                </select>
              </div>
            </div>
            {/* ESTADO NASCIMENTO */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="form-group">
                <label className="form-label">Estado do Nascimento</label>
                <select 
                  className={"form-control "+(values.paisNascimentoSelecionado ? '' : 'select-disable')}
                  value={values.estadoNascimento}
                  onChange={handleChange('estadoNascimento')}
                >
                  {renderOpcoesEstadosNascimento()}
                </select>
              </div>
            </div>
            {/* CIDADE NASCIMENTO */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="form-group">
                <label className="form-label">Cidade do Nascimento</label>
                <select 
                  className={"form-control "+(values.estadoNascimentoSelecionado ? '' : 'select-disable')}
                  value={values.cidadeNascimento}
                  onChange={handleChange('cidadeNascimento')}
                >
                  {renderOpcoesCidadesNascimento()}
                </select>
              </div>
            </div>
            {/* NACIONALIDADE */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="form-group">
                <label className="form-label">Nacionalidade</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite sua Nacionalidade"
                  value={values.nacionalidade}
                  onChange={handleChange('nacionalidade')}
                />
              </div>
            </div>
            {/* NASCIMENTO */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="form-group">
                <label className="form-label">Nascimento</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite seu Nascimento"
                  value={values.dataNascimento}
                  onChange={handleChange('dataNascimento')}
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="ui horizontal divider">Mais Informações</div>
            </div>
            {/* MAIS INFORMAÇÕES */}
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="form-group">
                <label className="form-label">Fale um pouco de você</label>
                <textarea 
                  rows="5" 
                  className="form-control" 
                  placeholder="Conte-nos o que te motiva!" 
                  value={values.maisInformacoes}
                  onChange={handleChange('maisInformacoes')}
                ></textarea>
              </div>
            </div>
        
          </div> {/* /row */}
        </div> {/* /card-body */}
      </div> {/* /card */}
      {/* CARD - DOADOR/FORNECEDOR */}
      <div className="card">
        <div className="card-body">
          <div className="row">
            {/* BENEFICIÁRIA */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="form-group">
                <div className="form-label">Você quer ser beneficiário?</div>
                <div className="custom-controls-stacked">
                  <label className="custom-control custom-radio custom-control-inline">
                    <input 
                      type="checkbox" 
                      className="custom-control-input"
                      checked={values.beneficiaria ? true : false}
                      value={true}
                      onChange={handleChange('beneficiaria')} 
                    />
                    <span className="custom-control-label">Sim</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                  <input 
                      type="checkbox" 
                      className="custom-control-input"
                      checked={values.beneficiaria ? false : true}
                      value={false}
                      onChange={handleChange('beneficiaria')} 
                    />
                    <span className="custom-control-label">Não</span>
                  </label>
                </div>
              </div>
            </div>
            {/* DOADOR */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="form-group">
                <div className="form-label">Você quer ser doador?</div>
                <div className="custom-controls-stacked">
                  <label className="custom-control custom-radio custom-control-inline">
                    <input 
                      type="checkbox" 
                      className="custom-control-input"
                      checked={values.doadora ? true : false}
                      value={true}
                      onChange={handleChange('doadora')} 
                    />
                    <span className="custom-control-label">Sim</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                  <input 
                      type="checkbox" 
                      className="custom-control-input"
                      checked={values.doadora ? false : true}
                      value={false}
                      onChange={handleChange('doadora')} 
                    />
                    <span className="custom-control-label">Não</span>
                  </label>
                </div>
              </div>
            </div>
            {/* FORNECEDOR */}
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="form-group">
                <div className="form-label">Você quer ser fornecedor?</div>
                <div className="custom-controls-stacked">
                  <label className="custom-control custom-radio custom-control-inline">
                    <input 
                      type="checkbox" 
                      className="custom-control-input"
                      checked={values.fornecedora ? true : false}
                      value={true}
                      onChange={handleChange('fornecedora')} 
                    />
                    <span className="custom-control-label">Sim</span>
                  </label>
                  <label className="custom-control custom-radio custom-control-inline">
                  <input 
                      type="checkbox" 
                      className="custom-control-input"
                      checked={values.fornecedora ? false : true}
                      value={false}
                      onChange={handleChange('fornecedora')} 
                    />
                    <span className="custom-control-label">Não</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BOTÃO REGISTRO */}
      <div className="row row100">
        <div className="col-sm-12 col-md-12 col-lg-12">
          {/* 
            <button className="btn btn-outline-primary my-2 my-sm-0 btn-registro-beneficiario" onClick={abrirOverlayQuerSerUmDoador}>Registrar</button>
          */}
          <button className="btn btn-outline-primary my-2 my-sm-0 btn-registro-beneficiario" onClick={cadastrarBeneficiario}>Registrar</button>
        </div>
      </div>
      {/* OVERLAY */}
      <div 
        className={"overlay "}
        style={values.overlayAberto ? {height: '100%'} : {height: '0%'}}
      >
        <label className="selectgroup-item closebtn" onClick={fecharOverlayQuerSerUmDoador}>
          <input type="radio" name="icon-input" className="selectgroup-input"/>
          <span><i className="fe fe-x"></i></span>
        </label>
        <div className="overlay-content">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-custom">
              {values.mouseEnterDoador ?
                <img src={gifBonequinho} alt="imagem1" />
              :
                <img src={pngBonequinho} alt="imagem1" />
              }
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus porta felis sed porttitor. Quisque vehicula lorem eu tincidunt aliquet. Cras efficitur nisl id sagittis fringilla. Nunc quis sapien nec orci tempor laoreet sed id lacus. Nunc iaculis ornare semper. 
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-custom">
            {values.mouseEnterDoador ?
                <img src={imagem2} alt="imagem2" />
              :
                <img src={imagem2} alt="imagem2" />
              }
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus porta felis sed porttitor. Quisque vehicula lorem eu tincidunt aliquet. Cras efficitur nisl id sagittis fringilla. Nunc quis sapien nec orci tempor laoreet sed id lacus. Nunc iaculis ornare semper. 
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-custom">
            {values.mouseEnterDoador ?
                <img src={gifMaosCoracao} alt="imagem3" />
              :
                <img src={pngMaosCoracao} alt="imagem3" />
              }
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus porta felis sed porttitor. Quisque vehicula lorem eu tincidunt aliquet. Cras efficitur nisl id sagittis fringilla. Nunc quis sapien nec orci tempor laoreet sed id lacus. Nunc iaculis ornare semper. 
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-custom">
              <div className="containerBotoesQuerNaoQuer">
                <button className="btn btn-quero-ser-um-doador" onMouseEnter={mouseEnterDoador} onMouseLeave={mouseOutDoador} onClick={cadastrarComoDoador}>Quero ser um doador!</button>
                <button className="btn btn-nao-quero-ser-um-doador" onClick={cadastrarSemDoador}>Não, obrigado</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}