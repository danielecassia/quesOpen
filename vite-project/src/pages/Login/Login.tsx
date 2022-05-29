import * as React from 'react';
import './Login.scss';
import {
  useNavigate
  } from "react-router-dom";

import logo from '../../assets/imagens/logo.svg';


export function Login() {
  const navigate = useNavigate();

  function onClickLogin() {
    console.log('enviei dados');
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
                type='submit'
                onClick={()=>navigate(`home`)}
                >Entrar</button>
            </form>
            <div className="login-footer">
              <p>Ainda não tem uma conta? <a href="./register">Cadastre-se aqui</a> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}