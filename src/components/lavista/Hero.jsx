import React from 'react'

const Hero = () => (
  <>
    <section className="relative overflow-hidden bg-surface py-12 md:py-24 border-b border-outline-variant/30">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    {/* Content Column */}
    <div className="lg:col-span-7 flex flex-col items-start space-y-6">
    {/* Anniversary Badge */}
    <div className="inline-flex items-center gap-3 px-3 py-1.5 border border-primary/40 bg-surface-container-low">
    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
    <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest">
                  5 Años de Tradición &amp; Vanguardia (2019 - 2024)
                </span>
    </div>
    {/* Headline */}
    <h1 className="text-display-hero-mobile md:text-display-hero font-display-hero-mobile md:font-display-hero text-on-surface leading-tight">
                Cinco Años Tejiendo la Esencia del Caribe y la Alta Costura
              </h1>
    {/* Subtitle */}
    <p className="text-body-md md:text-body-lg font-body-md md:font-body-lg text-on-surface-variant max-w-xl">
                Donde la nobleza del lino cubano se fusiona con la vitalidad y fuerza gráfica de los tejidos angolanos. Confección a medida nacida en el corazón de La Habana.
              </p>
    {/* CTAs */}
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
    <a className="inline-flex justify-center items-center px-10 py-4 bg-primary text-surface hover:bg-primary-container text-label-lg font-label-lg uppercase tracking-widest transition-all duration-300" href="#coleccion">
                  Explorar Colección
                </a>
    <a className="inline-flex justify-center items-center px-8 py-4 border border-on-surface text-on-surface hover:bg-on-surface hover:text-surface text-label-lg font-label-lg uppercase tracking-widest transition-all duration-300" href="#contacto">
                  Solicitar Cita Privada
                </a>
    </div>
    {/* Micro Highlights */}
    <div className="pt-8 border-t border-outline-variant/40 flex items-center gap-8 w-full">
    <div>
    <p className="text-headline-sm font-headline-sm text-primary">La Habana</p>
    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Atelier Central</p>
    </div>
    <div className="w-px h-8 bg-outline-variant/60"></div>
    <div>
    <p className="text-headline-sm font-headline-sm text-primary">100% Puro</p>
    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Lino Seleccionado</p>
    </div>
    <div className="w-px h-8 bg-outline-variant/60"></div>
    <div>
    <p className="text-headline-sm font-headline-sm text-primary">Bespoke</p>
    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Patronaje a Mano</p>
    </div>
    </div>
    </div>
    {/* Editorial Visual Duo */}
    <div className="lg:col-span-5 relative">
    <div className="relative z-10 aspect-[4/5] bg-surface-container overflow-hidden shadow-2xl">
    <img className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" data-alt="Editorial portrait of a striking Cuban model posing in an opulent colonial Havana courtyard, dressed in a bespoke luxury linen guayabera layered with vibrant Afro-Angolan geometric patterned silk in deep terracotta, cobalt blue, and rich gold accents. Warm afternoon tropical light filters softly through historic wooden shutters, casting delicate linear shadows across authentic architectural textures." src="/images/hero-model.png" alt="High-fashion editorial portrait of an elegant Afro-Cuban model wearing a bespoke luxury couture ceremonial guayabera shirt named 'Luz de Malecón' on the Havana Malecón" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    <div className="absolute bottom-6 left-6 right-6 text-white">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary-fixed">Pieza Conmemorativa</span>
    <h3 className="text-headline-sm font-headline-sm text-white mt-1">Guayabera Ceremonial 'Luz de Malecón'</h3>
    </div>
    </div>
    {/* Decorative Architectural Framing */}
    <div className="absolute -top-4 -right-4 w-full h-full border border-primary/30 pointer-events-none -z-0"></div>
    </div>
    </div>
    </div>
    </section>
    {/* HISTORIA & HERENCIA (STORYTELLING) */}
  </>
)

export default Hero
