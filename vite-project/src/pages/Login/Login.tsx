import * as React from 'react';
import './Login.scss'
import axios from 'axios';
import { useEffect } from 'react';
import {
  useNavigate
  } from "react-router-dom";
import Link from '@mui/material/Link';
import logo from '../../assets/imagens/logo.svg';

export function Login() {
  const navigate = useNavigate();
  axios.get('/usuarios/me').then((res) => navigate('/home'))
  .catch((err) => console.log("NAO TA LOGADO"));

  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  function onClickLogin(ev) {
    ev.preventDefault();
    axios.post('/login', {email, senha})
    .then((res) => navigate('/home'))
    .catch((error) => alert(error.message));
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
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <input
                  type="password"
                  placeholder='Senha'
                  value={senha}
                  onChange={(ev) => setSenha(ev.target.value)}
                />
              </div>
              <button
                type='submit'
                >Entrar</button>
            </form>
            <div className="login-footer">
              <p>Ainda não tem uma conta? 
                <Link 
                  underline="none" 
                  color="black"
                  href="./register">
                  {'Cadastre-se aqui'}
                </Link> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}