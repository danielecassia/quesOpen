import { Home } from '..//Home/Home';
import logo from '../../../assets/imagens/logo.svg';
import './Register.scss';

export function Register() {

  function onClickRegister() {
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
                    //   value={email}
                    //   onChange={(ev) => setEmail(ev.target.value)}
                    />
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
                  <div>
                    <input
                    type='date'
                    placeholder='Data de Nascimento'
                    //   value={email}
                    //   onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <input
                    type='text'
                    placeholder='Confirmar E-mail'
                    //   value={email}
                    //   onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <input
                    type="password"
                    placeholder='Confirmar Senha'
                    //   value={password}
                    //   onChange={(ev) => setPassword(ev.target.value)}
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