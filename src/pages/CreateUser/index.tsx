import React, { useState } from 'react';

import { Link } from 'react-router-dom'

import Input from '../../components/Input'

import './styles.scss'
import logoImg from "../../assets/images/logo.svg"
import backIcon from '../../assets/images/icons/back.svg'


// import { Container } from './styles';

const CreateUser = () => {

   const [nome, setNome] = useState('')
   const [sobreNome, setSobreNome] = useState('')
   const [email, setEmail] = useState('')
   const [senha, setSenha] = useState('')
    
  return (
      <div className="container-cadastro">
                    <div className="esquerda-cadastro">
            
            <header className="header-cadastro">
                <Link to="/">
                    <img src={backIcon} alt="Ícone para voltar"/>
                </Link>
            </header>
            <div className="proffy-form-cadastro">
                <legend>Cadastro</legend>
                <h2>Preencha os dados abaixo para começar.</h2>
                
                <form action="">
                    <Input onChange={e => setNome(e.target.value)}
                        label=""
                        name="nome"
                        placeholder="Nome"/>
                    <Input onChange={e => setSobreNome(e.target.value)}
                        label=""
                        name="sobreNome"
                        placeholder="Sobrenome"/>
                    <Input onChange={e => setEmail(e.target.value)}
                        label=""
                        name="email"
                        placeholder="E-mail"/>
                    <Input onChange={e => setSenha(e.target.value)}
                        label=""
                        name="senha"
                        placeholder="Senha"/>
                </form>

                <button disabled={!nome && !sobreNome && !email && !senha}
                type="submit">Concluir cadastro</button>

            </div>
        
  </div>
          <div className="direita-cadastro">
                <div className="logo-centro-cadastro">
                    <img 
                        src={logoImg} 
                        alt="Proffy" 
                        className="Proffy-cadastro"/> 
                    <h2>Sua plataforma de <br/>estudos online</h2>
                </div>
          </div>

      </div>
  );
}

export default CreateUser;