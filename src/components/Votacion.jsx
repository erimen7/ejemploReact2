import React,{ useState } from 'react'
import './Votacion.css'
import img1 from '../img/a1.jpg'

const Votacion = (props) => {
  // cont=0 cont++ useState[cont, cont++]  
    const [like, setLikes]= useState(0)
    const [compar, setCompar]= useState(0)
    const darLikes= () =>{
        setLikes(like+1)
    }
    const disLikes= () =>{
        setLikes(like-1)
    }
    const compartir= () =>{
        setCompar(compar+1)
    }
  return (
    <>
        <article className='red'>
            <h1 className='red-titulo'>{props.titulo}</h1>
            {props.icono2}
            <img src={props.imagenk} className='imagen6'></img>            
            <p className='red-des'>{props.descripcion}</p>
            <p>likes: {like}</p>
            <p>Compartido: {compar}</p>
            <div className='red-boton'> 
                 <button onClick={darLikes}>Dar Like</button>
                 <button onClick={disLikes}>DisLike</button>
                 <button onClick={compartir}>Compartir</button>
            </div>
        </article>
    </>
  )
}

export default Votacion