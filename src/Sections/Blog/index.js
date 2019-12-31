import React, { useState, useEffect } from 'react';
import Navbar from './../../Components/Layouts/Navbar';
import Alert from './../../Components/Alert';

export default function Blog() {
  const [values, setValues] = useState({
    mostrarAlerta: false,
    typeAlerta: 'success',
    positionAlert: 'top-left',
    textAlert: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium est sit amet erat egestas vulputate.'
  });

//HANDLE CHANGE
const handleChange = name => event => {
  switch(name) {
    default:
      return setValues({ ...values, [name]: event.target.value });
  }
};

useEffect(() => {
  console.log('Tipo -> ' + values.typeAlerta);
}, [values.typeAlerta]);

const tipoDoAlerta = (tipo) => {
  setValues({ ...values, typeAlerta: tipo });
}
const posicaoDoAlerta = (posicao) => {
  setValues({ ...values, positionAlert: posicao });
}
const mostrarAlerta = (posicao) => {
  setValues({ ...values, mostrarAlerta: true });
  setTimeout(
    function() {
      setValues({ ...values, mostrarAlerta: false });
    },
    8000
  );
}

// Mostrar Alert
const renderAlerta = () => {
  if (values.mostrarAlerta) {
    return <Alert type={values.typeAlerta} position={values.positionAlert} text={values.textAlert} />
  }
}

  return (
    <>
      <Navbar />
      {renderAlerta()}
      <div className="content-generic-blog">
        <h1>Alertas</h1>
        <div className="form-group">
          <label className="form-label">Texto do Alerta</label>
          <textarea 
            rows="3" 
            className="form-control" 
            placeholder="Texto do Alerta" 
            value={values.textAlert}
            onChange={handleChange('textAlert')}
          ></textarea>
        </div>
        <div className="buttons">
          <label className="form-label">Tipo do Alerta</label>
          <button className={"btn btn-success " + (values.typeAlerta === 'success' ? 'activeAlert' : 'nada')} onClick={() => tipoDoAlerta('success')}>Success</button>
          <button className={"btn btn-warning " + (values.typeAlerta === 'warning' ? 'activeAlert' : 'nada')} onClick={() => tipoDoAlerta('warning')}>Warning</button>
          <button className={"btn btn-danger " + (values.typeAlerta === 'error' ? 'activeAlert' : 'nada')} onClick={() => tipoDoAlerta('error')}>Error</button>
          <button className={"btn btn-info " + (values.typeAlerta === 'notice' ? 'activeAlert' : 'nada')} onClick={() => tipoDoAlerta('notice')}>Notice</button>
          <button className={"btn btn-dark " + (values.typeAlerta === 'plain' ? 'activeAlert' : 'nada')} onClick={() => tipoDoAlerta('plain')}>Plain</button>
        </div>
        <div className="buttons">
          <label className="form-label">Posição do Alerta</label>
          <button className={"btn btn-primary " + (values.positionAlert === 'top-left' ? 'activeAlert' : 'nada')} onClick={() => posicaoDoAlerta('top-left')}>Top Left</button>
          <button className={"btn btn-primary " + (values.positionAlert === 'top-right' ? 'activeAlert' : 'nada')} onClick={() => posicaoDoAlerta('top-right')}>Top Right</button>
          <button className={"btn btn-primary " + (values.positionAlert === 'bottom-right' ? 'activeAlert' : 'nada')} onClick={() => posicaoDoAlerta('bottom-right')}>Bottom Right</button>
          <button className={"btn btn-primary " + (values.positionAlert === 'bottom-left' ? 'activeAlert' : 'nada')} onClick={() => posicaoDoAlerta('bottom-left')}>Bottom Left</button>
          <button className={"btn btn-primary " + (values.positionAlert === 'bar-top' ? 'activeAlert' : 'nada')} onClick={() => posicaoDoAlerta('bar-top')}>Top Bar</button>
          <button className={"btn btn-primary " + (values.positionAlert === 'bar-bottom' ? 'activeAlert' : 'nada')} onClick={() => posicaoDoAlerta('bar-bottom')}>Bottom Bar</button>
        </div>
        <div className="buttons">
          <button className={"btn btn-primary btn-mostrar " + (values.mostrarAlerta ? 'btn-disable' : 'nada')} onClick={() => mostrarAlerta()}>Mostrar Alerta</button>
        </div>
      </div>

    </>
  );
}