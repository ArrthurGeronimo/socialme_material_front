import React, { useState, useEffect } from 'react';
import './style.css';

export default function Alert(props) {
    const [values, setValues] = useState({
 
      });
  return (
    <>
        <div className="container formLogin">
          <div className="row">
            <div className="col col-login mx-auto">
              <div className="text-center mb-6">
                <img src="./demo/brand/tabler.svg" className="h-6" alt=""/>
              </div>
              <div className="card">
                <div className="card-body p-6">
                  <div className="form-group campo">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div className="form-footer">
                    <button className="btn btn-primary btn-block">Próximo</button>
                  </div>
                </div>
              </div>
              <div className="text-center text-muted">
                Ainda não é cadastrado? <a href="./register.html">Cadastra-se aqui</a>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}