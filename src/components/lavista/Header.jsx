import React from 'react'

const Header = () => (
  <>
    <header className="bg-surface/95 dark:bg-inverse-surface/95 backdrop-blur-md top-0 sticky z-50 border-b border-outline-variant/30 dark:border-outline/20">
    <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin max-w-7xl mx-auto py-space-md">
    {/* Brand Logo Anchor */}
    <a className="font-headline-md text-2xl md:text-headline-md tracking-wider text-primary dark:text-inverse-primary uppercase transition-colors duration-200" href="#">
            MAISON LAVISTA
          </a>
    {/* Desktop Navigation Links (Expanded) */}
    <nav className="hidden lg:flex items-center gap-6">
    <a className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors pb-1 text-label-md font-label-md uppercase tracking-wider" href="#historia">Historia</a>
    <a className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors pb-1 text-label-md font-label-md uppercase tracking-wider" href="#coleccion">Colección</a>
    <a className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors pb-1 text-label-md font-label-md uppercase tracking-wider" href="#pasarelas">Pasarelas</a>
    <a className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors pb-1 text-label-md font-label-md uppercase tracking-wider" href="#taller">Taller &amp; Maquinarias</a>
    <a className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors pb-1 text-label-md font-label-md uppercase tracking-wider" href="#bodas">Bodas</a>
    <a className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors pb-1 text-label-md font-label-md uppercase tracking-wider" href="#sucursales">Sucursales</a>
    <a className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors pb-1 text-label-md font-label-md uppercase tracking-wider" href="#novedades">Novedades</a>
    <a className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors pb-1 text-label-md font-label-md uppercase tracking-wider" href="#contacto">Contacto</a>
    </nav>
    {/* Trailing Primary Action & Icon Actions */}
    <div className="flex items-center gap-4">
    <button aria-label="Bolsa de Compras" className="text-on-surface hover:text-primary transition-colors p-2">
    <span className="material-symbols-outlined text-2xl">shopping_bag</span>
    </button>
    <a className="hidden sm:inline-flex items-center bg-primary text-surface hover:bg-primary-container transition-all duration-200 px-5 py-2.5 text-label-sm font-label-sm uppercase tracking-wider" href="#contacto">
              Agendar Cita
            </a>
    </div>
    </div>
    {/* Sub-navigation horizontal bar on small screens */}
    <div className="lg:hidden flex overflow-x-auto gap-4 px-4 py-2 border-t border-outline-variant/30 text-xs uppercase tracking-wider no-scrollbar bg-surface-container-low">
    <a className="whitespace-nowrap hover:text-primary" href="#historia">Historia</a>
    <a className="whitespace-nowrap hover:text-primary" href="#coleccion">Colección</a>
    <a className="whitespace-nowrap hover:text-primary" href="#pasarelas">Pasarelas</a>
    <a className="whitespace-nowrap hover:text-primary" href="#taller">Taller</a>
    <a className="whitespace-nowrap hover:text-primary" href="#bodas">Bodas</a>
    <a className="whitespace-nowrap hover:text-primary" href="#sucursales">Sucursales</a>
    <a className="whitespace-nowrap hover:text-primary" href="#novedades">Novedades</a>
    <a className="whitespace-nowrap hover:text-primary" href="#contacto">Contacto</a>
    </div>
    </header>
    {/* HERO SECTION */}
  </>
)

export default Header
