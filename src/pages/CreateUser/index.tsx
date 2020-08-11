import React from 'react';

import { Link } from 'react-router-dom'

import Input from '../../components/Input'

import logoImg from "../../assets/images/logo.svg"
import backIcon from '../../assets/images/icons/back.svg'


// import { Container } from './styles';

const CreateUser = () => {
  return (
      <div className="container-cadastro">
          <div className="direita-cadastro">
                <div className="logo-centro-cadastro">
                    <img 
                        src={logoImg} 
                        alt="Proffy" 
                        className="Proffy-cadastro"/> 
                    <h2>Sua plataforma de estudos online</h2>
                </div>
          </div>
          <div className="esquerda-cadastro">
                <div className="esquerda-cadastro">
                    <header>
                        <Link to="/">
                            <img src={backIcon} alt="Ícone para voltar"/>
                        </Link>
                    </header>
                    <div className="proffy-form-cadastro">
                        <legend>Cadastro</legend>
                        <h2>Preencha os dados abaixo para começar.</h2>
                        
                        <form action="">
                            <Input 
                                label=""
                                name="nome"
                                placeholder="Nome"/>
                            <Input 
                                label=""
                                name="sobreNome"
                                placeholder="Sobrenome"/>
                            <Input 
                                label=""
                                name="email"
                                placeholder="E-mail"/>
                            <Input 
                                label=""
                                name="senha"
                                placeholder="Senha"/>
                        </form>

                        <button type="submit">Concluir cadastro</button>

                    </div>
                </div>
          </div>
      </div>
  );
}

export default CreateUser;