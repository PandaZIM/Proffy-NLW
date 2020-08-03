import React from 'react'

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem (){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/47374572?s=460&u=e48b8f7de8c4c9e318b0b4182e8892c986e67cf2&v=4" alt="João Pedro Coutinho"/>
            <div>
                <strong>João Pedro Coutinho</strong>
                <span>Palestrinha</span>
            </div>
        </header>
        <p>
             Mais de milhares de pessoas ja tiveram de ouvir umas de suas palastras.
             <br /><br />
             Variando de politica até jogos e animes.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ Arrasta pra cima e descubra</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem