import { Home } from '../Home/Home';
import logo from '../../assets/imagens/logo.svg';
import * as React from 'react';
import './Register.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const navigate = useNavigate();
  axios.get('/usuarios/me').then((res) => navigate('/home'))
  .catch((err) => console.log("NAO TA LOGADO"));

  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [email_confirm, setEmailConfirm] = React.useState('');
  const [senha_confirm, setSenhaConfirm] = React.useState('');
  const [data_nasc, setDataNasc] = React.useState('');

  function onClickRegister(ev) {
    ev.preventDefault();
    if(email_confirm!==email){
      alert('Emails devem ser iguais');
      return;
    }
    if(senha!=senha_confirm){
      alert('Senhas devem ser iguais');
      return;
    }
    axios.post('/usuarios', {email,senha,nome,email_confirm,senha_confirm,data_nasc})
    .then((res) =>{alert('Usuário cadastrado com sucesso.'); navigate('/')})
    .catch((error) => console.log(error.message));
  }

  return (
    <div className="register">
      <div className="register-card">
        <div className="cima">
          <img src={logo} alt="" />
        </div>

        <div className="baixo">
          <div className="register-content">
            <form onSubmit={onClickRegister}>
              <div className='inputs'>
                  <div>
                    <input
                    type='text'
                    placeholder='Nome'
                      value={nome}
                      onChange={(ev) => setNome(ev.target.value)}
                    />
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
                  <div>
                    <input
                    type='date'
                    placeholder='Data de Nascimento'
                      value={data_nasc}
                      onChange={(ev) => setDataNasc(ev.target.value)}
                    />
                    <input
                    type='text'
                    placeholder='Confirmar E-mail'
                      value={email_confirm}
                      onChange={(ev) => setEmailConfirm(ev.target.value)}
                    />
                    <input
                    type="password"
                    placeholder='Confirmar Senha'
                      value={senha_confirm}
                      onChange={(ev) => setSenhaConfirm(ev.target.value)}
                    />
                  </div>
              </div>
              <button
                type='submit'>Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}