import React from 'react'
import Header from './components/lavista/Header'
import Hero from './components/lavista/Hero'
import Historia from './components/lavista/Historia'
import Coleccion from './components/lavista/Coleccion'
import Temporadas from './components/lavista/Temporadas'
import Pasarelas from './components/lavista/Pasarelas'
import Taller from './components/lavista/Taller'
import Bodas from './components/lavista/Bodas'
import Sucursales from './components/lavista/Sucursales'
import Novedades from './components/lavista/Novedades'
import Testimonios from './components/lavista/Testimonios'
import Cuidados from './components/lavista/Cuidados'
import Solidaridad from './components/lavista/Solidaridad'
import ResiduoCero from './components/lavista/ResiduoCero'
import Contacto from './components/lavista/Contacto'
import Footer from './components/lavista/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Historia />
        <Coleccion />
        <Temporadas />
        <Pasarelas />
        <Taller />
        <Bodas />
        <Sucursales />
        <Novedades />
        <Testimonios />
        <Cuidados />
        <Solidaridad />
        <ResiduoCero />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}

export default App
