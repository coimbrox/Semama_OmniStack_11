import React, { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from  '../../services/api';

import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 const [value, setValue] = useState('');

const history = useHistory();

 const ongId = localStorage.getItem('ongId');

async function handleNewIncident(e){
  e.preventDefault();

  const data = {
    title,
    description,
    value,
  };

 try {
  await api.post('incidents', data, {
    headers: {
      Authorization: ongId,
    }
  })

  history.push('/profile');
 } catch (err) {
   alert('Erro ao Cadastrar Caso, Tente Novamente.');
 }

}


  return (
    <div className="new-incident-container">
    <div className="content">
      <section>
     <img src={logoImg}  alt="Be The Hero"/>
     <h1>Cadastrar Novo Caso</h1>
     <p>Descreva seu caso detalhadamente para encontrar um Herói para resolver isso.</p>

     <Link className="back-link" to="/profile">
         <FiArrowLeft size={16} color="#E02041" />
         Voltar Para Home
       </Link>
      </section>
      
      <form onSubmit={handleNewIncident}>
        <input 
          placeholder ="Título do Caso"
          value={title}
          onChange={e => setTitle(e.target.value)}
          />

        <textarea 
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
          />
                    
        <input 
          placeholder="Valor em Reais"
          value={value}
          onChange={e => setValue(e.target.value)}
          />
            
        <button className="button" type="Submit">Cadastrar</button>
      </form>
     </div>
   </div>
  )
}