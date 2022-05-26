import * as React from 'react';
import './Login.scss';
import {
    Route,
  } from "react-router-dom";

import { Home } from '..//Home/Home';
import logo from '../../../assets/imagens/logo.svg';


export function Login() {

  function onClickLogin() {
    console.log('certinnnn');
    console.log('certinnnn');
    console.log('certinnnn');
    console.log('certinnnn');
    console.log('certinnnn');
    console.log('certinnnn');
    console.log('certinnnn');
  }

  return (
    <div className="Login">
      <div className="Login-card">
        <div className="left">
          <img src={logo} alt="" />
        </div>

        <div className="right">
          <h1>Login</h1>
          <div className="login-content">
            <form onSubmit={onClickLogin}>
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
            <div className="login-footer">
              <p>Ainda não tem uma conta? Cadastre-se aqui</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}