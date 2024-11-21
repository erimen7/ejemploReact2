import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Ricky from '../components/Ricky'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [character,setCharacter]=useState([])
  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character') 
    .then(response => response.json())
    .then(data => setCharacter(data.results))

  },[])

  return (
    <>
    <div>Pagina principal</div>
    <p><a href="/paginaReporte"> ESte es un enlace mediante a </a></p>
    <br></br>
    <p><Link to='/paginaReporte'>Este es un enlace con link</Link></p>
    <div className='container d-flex flex-wrap'>
    {
    character.map(character =>{
      return <Ricky 
        imagen={character.image}
        nombre={character.name}
        especie={character.species}
        estatus={character.status}
        tipo={character.type}
        genero={character.gender}
        url={character.url}
      />
      
    }) 
  }
  </div>
    </>
  )
}

export default Home