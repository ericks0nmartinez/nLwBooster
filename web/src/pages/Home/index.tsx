import React from 'react';
import './styles.css';
import Logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
       <div id="page-home">
           <div className="content">
               <header>
                    <img src={ Logo } alt="Ecoleta" />
               </header>
               <main>
                   <h1>Seu marketplace de Coleta de resíduos.</h1>
                   <p>Ajudamos pessoas a encontrarem pontos de coletas de forma eficiente.</p>
                   <Link to="/creat-point">
                       <span><FiLogIn /></span>
                       <strong>Cadastre um ponto de Coleta</strong>
                   </Link>
               </main>
           </div>
       </div>
    )
}

export default Home;