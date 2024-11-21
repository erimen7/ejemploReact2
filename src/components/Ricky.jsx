import React from 'react'
import {Link} from 'react-router-dom'
import './Ricky.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const Ricky = (props) => {
  return (
    <div className='fondo m-4'>
        <img src={props.imagen} className='fondo-img' />
        <div>
            <h4 className='fondo-titulo'>{props.nombre}</h4>
           <p className='fondo-texto'>Especie: {props.especie} <br/>
           Estatus: {props.estatus} <br/>
           Tipo: {props.tipo} <br/>
           Genero: {props.genero}
           </p>
           <Link href={props.url} className='btn btn-primary'>
              <FontAwesomeIcon icon={faBell} /> Saber mas... 
            </Link> 
        </div>
    </div>
  )
}

export default Ricky