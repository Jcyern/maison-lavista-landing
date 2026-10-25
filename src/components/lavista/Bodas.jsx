import React from 'react'

const Bodas = () => (
  <>
    <section className="py-20 md:py-28 bg-surface-container-low relative overflow-hidden" id="bodas">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    {/* Visual Presentation con Fotos de Bodas Requeridas */}
    <div className="lg:col-span-6 relative">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-2xl">
    <div className="relative aspect-[3/4] bg-surface-container overflow-hidden group">
    <img alt="Vestido de Novia en Lino y Encaje Botánico - Colección Nupcial Maison Lavista" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/novia-lino.png" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    <div className="absolute bottom-4 left-4 right-4 text-white">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary-fixed">Couture Nupcial</span>
    <p className="text-body-sm font-body-sm text-white font-medium">Vestido 'Catedral de Lino'</p>
    </div>
    </div>
    <div className="relative aspect-[3/4] bg-surface-container overflow-hidden group sm:mt-6">
    <img alt="Pareja Nupcial en Patio Colonial Habanero - Maison Lavista" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/pareja-nupcial.png" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    <div className="absolute bottom-4 left-4 right-4 text-white">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary-fixed">Novios Maison Lavista</span>
    <p className="text-body-sm font-body-sm text-white font-medium">Sastrería &amp; Velo Habanero</p>
    </div>
    </div>
    </div>
    <div className="absolute -bottom-6 -left-6 bg-surface p-6 border border-outline-variant/40 hidden sm:block max-w-xs shadow-lg">
    <p className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">Novias Maison Lavista</p>
    <p className="text-body-sm font-body-sm text-on-surface mt-1">"La brisa marina requiere telas que respiren con la misma cadencia que tu corazón."</p>
    </div>
    </div>
    {/* Bridal Story & Service Pillars */}
    <div className="lg:col-span-6 flex flex-col items-start space-y-6">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">Atelier Nupcial de Alta Costura</span>
    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface leading-tight">
                El Vestido de Tus Sueños, Esculpido para el Clima Tropical
              </h2>
    <p className="text-body-md md:text-body-lg font-body-md md:font-body-lg text-on-surface-variant">
                Reescribimos la etiqueta nupcial caribeña. Diseñamos vestidos de novia irrepetibles que desafían la pesadez de los tules tradicionales con linos vaporosos, sedas livianas, espaldas descubiertas y bordados botánicos con personalidad propia.
              </p>
    {/* Bridal Service Features List */}
    <div className="space-y-4 w-full pt-4">
    <div className="flex items-start gap-4 p-4 bg-surface border-l-2 border-primary shadow-sm">
    <span className="material-symbols-outlined text-primary text-2xl mt-0.5">straighten</span>
    <div>
    <h4 className="text-label-lg font-label-lg text-on-surface uppercase tracking-wide">3 a 5 Pruebas Exclusivas en Atelier</h4>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                      Acompañamiento cercano durante cada fase: desde el boceto a carboncillo hasta el ajuste final sobre el cuerpo.
                    </p>
    </div>
    </div>
    <div className="flex items-start gap-4 p-4 bg-surface border-l-2 border-primary shadow-sm">
    <span className="material-symbols-outlined text-primary text-2xl mt-0.5">style</span>
    <div>
    <h4 className="text-label-lg font-label-lg text-on-surface uppercase tracking-wide">Asesoría Integral de Estilismo</h4>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                      Selección de velos artesanales de lino, joyería botánica cubana y peinados adecuados para la humedad tropical.
                    </p>
    </div>
    </div>
    <div className="flex items-start gap-4 p-4 bg-surface border-l-2 border-primary shadow-sm">
    <span className="material-symbols-outlined text-primary text-2xl mt-0.5">group</span>
    <div>
    <h4 className="text-label-lg font-label-lg text-on-surface uppercase tracking-wide">Confección a Juego para el Novio</h4>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                      Guayabera nupcial de lino irlandés o cubano, con alforzado maestro y botones de hueso o nácar tallados a mano.
                    </p>
    </div>
    </div>
    </div>
    {/* Bridal CTA */}
    <div className="pt-4">
    <a className="inline-flex justify-center items-center px-10 py-4 bg-primary text-surface hover:bg-primary-container text-label-lg font-label-lg uppercase tracking-widest transition-all duration-300" href="#contacto">
                  Reservar Consulta Nupcial
                </a>
    </div>
    </div>
    </div>
    </div>
    </section>
    {/* RF06b - SUCURSALES Y CASAS DE ENCUENTRO */}
  </>
)

export default Bodas
