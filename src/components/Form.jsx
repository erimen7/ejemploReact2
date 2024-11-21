import React from 'react'

const Form = () => {
   const mandarDato=(e) => {
        alert('Se realizo la verificacion de acceso',e);
   } 
  return (
    <div className='contenedor'>
        <h2>Acceso al sitio</h2>
        <form>
            <>
               <label for="nombre">NOMBRE:</label>
               <input type="text" name="nombre" required="true" />             
            </>
            <>
            <label for="nombre">CLAVE:</label>
            <input type="password" name="clave" id="clave" />  
            </>     
            <>
            <button type='button' id='boton123' onClick={mandarDato} >ENTRAR</button>    
            </>
        </form>
    </div>
   )
}

export default Form

