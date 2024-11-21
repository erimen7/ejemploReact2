import React from 'react'

const Iconos = () => {
  const ListaIcono=['😍','😎','😢','🤢','🎅']  
  //const ListaIcono=['😍','😎','😢']  
  const mostrarIcono=[]
  ListaIcono.forEach(element=>{mostrarIcono.push(
        <h1 key={element}>{element}</h1>
          )
})
  return (
    <>
    {mostrarIcono}
    </>
  )
}

export default Iconos