import React from 'react';

import backgroundImage from '../../assets/images/background.svg'
import logoImg from "../../assets/images/logo.svg"

import './styles.scss'
import Input from '../../components/Input';

const LoginPage = () => {
  return (
        <div className="container-teste">
            <div className="esquerda">
                <div className="logo-centro">
                <img src={logoImg} 
                    alt="Proffy"
                    className="proffy-login"/>
                <h2>Sua plataforma de<br/>estudos online</h2>
                </div>
            </div>
            <div className="direita">
              <div className="proffy-form">
                  <legend>Fazer login</legend>

                  <form action="">
                    <Input label="" name="email" placeholder="E-mail"/>
                    <Input label="" name="senha" placeholder="Senha"/>
                    <div className="lembrar-senha">
                      <div className="checkbox-form">
                      <input type="checkbox" name="lembrar-me"/>
                      <label htmlFor="lembrar-me">Lembrar-me</label>
                      </div>
                      <a href="#">Esqueci minha senha</a>
                    </div>
                    <button type="submit">Entrar</button>
                  </form>

                  <footer>
                    <div className="footer-login">
                      <span>Não tem conta ?</span>
                      <a href="#">Cadastre-se</a>
                    </div>
                    <span className="span-free">É de graça</span>
                  </footer>
              </div>
            </div>
        </div>
  );
}

export default LoginPage;