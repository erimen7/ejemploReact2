//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Reporte from './pages/Reporte'
import Form from './components/Form';
import Votacion from './components/Votacion'
import imaga1 from './img/a1.jpg'
import imaga2 from './img/a2.jpg'
import imaga3 from './img/a3.jpg'
import ListaIcono from './components/Iconos';
function App() {

  return (
   <>
      <p className='Parrafo'>Hola mundo.. </p>
      <h1>es un titulo</h1>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='paginaReporte' element={<Reporte/>} />
        </Routes>
      </BrowserRouter>
      {/*
      <Form></Form>
      <section className='ordenar'>
      <Votacion 
      titulo="La votacion para imagenes antiguas" 
      icono2={<ListaIcono />}
      descripcion="Es una imagen del siglo XVIII de un autor desconocido" imagenk={imaga1}></Votacion>
      <Votacion 
      titulo="La votacion para peliculas" descripcion="Pelicula de animatronicos " imagenk={imaga2}></Votacion>
      <Votacion titulo="La votacion para caricaturas" descripcion="una imagen de caricatura" imagenk={imaga3}></Votacion>
      </section>
    */}
  </>
  );
}

export default App;
