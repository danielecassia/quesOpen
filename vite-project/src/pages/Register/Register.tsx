import * as React from 'react';
import './Register.scss';
import {
    Route,
  } from "react-router-dom";

import { Home } from '..//Home/Home';
import logo from '../../../assets/imagens/logo.svg';


export function Register() {

  function onClickRegister() {
  }

  return (
    <div className="register">
      <div className="register-card">
        <div className="left">
          <img src={logo} alt="" />
        </div>

        <div className="right">
          <h1>register</h1>
          <div className="register-content">
            <form onSubmit={onClickRegister}>
              <div className='inputs'>
                <input
                  type='text'
                  placeholder='Email'
                //   value={email}
                //   onChange={(ev) => setEmail(ev.target.value)}
                />
                <input
                  type="password"
                  placeholder='Senha'
                //   value={password}
                //   onChange={(ev) => setPassword(ev.target.value)}
                />
              </div>
              <button
                type='submit'>Entrar</button>
            </form>
            <div className="register-footer">
              <p>Ainda não tem uma conta? Cadastre-se aqui</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}