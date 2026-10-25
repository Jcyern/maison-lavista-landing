import React from 'react'

const Temporadas = () => (
  <>
    <section className="py-20 md:py-28 bg-surface-container-high border-y border-outline-variant/30" id="temporadas">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
    {/* Seasonal Editorial Banner */}
    <div className="bg-primary text-surface p-8 md:p-14 mb-16 relative overflow-hidden">
    <div className="relative z-10 max-w-2xl">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary-fixed font-bold">
                Especial de Temporada
              </span>
    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-surface mt-2 mb-4">
                Especial Temporada de Brisas &amp; Calor Tropical
              </h2>
    <p className="text-body-md font-body-md text-surface/90 mb-8 leading-relaxed">
                Celebramos nuestro lustro con atenciones de alta costura diseñadas para acompañar la brisa del Caribe y las noches de verano en el trópico.
              </p>
    {/* Exclusive Seasonal Privileges */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-surface/20">
    <div>
    <p className="text-headline-sm font-headline-sm text-surface">Cita de Diseño</p>
    <p className="text-body-sm font-body-sm text-surface/80 mt-1">Sesión personalizada de estilismo incluida en atelier.</p>
    </div>
    <div>
    <p className="text-headline-sm font-headline-sm text-surface">Regalo Textil</p>
    <p className="text-body-sm font-body-sm text-surface/80 mt-1">Accesorio de autor en pedidos de sastrería completa.</p>
    </div>
    <div>
    <p className="text-headline-sm font-headline-sm text-surface">Telas Selectas</p>
    <p className="text-body-sm font-body-sm text-surface/80 mt-1">Acceso preferencial a cortes de edición limitada 2024.</p>
    </div>
    </div>
    </div>
    </div>
    {/* Two Seasonal Capsule Collections */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Capsule 1 */}
    <div className="bg-surface border border-outline-variant/30 p-8 flex flex-col justify-between">
    <div>
    <div className="aspect-[16/9] overflow-hidden mb-6">
    <img className="w-full h-full object-cover" data-alt="Editorial lookbook image presenting the Solsticio de Verano capsule collection: lightweight white linen garments, wide-leg trousers, and vibrant yellow-patterned African textile scarves styled effortlessly under bright sun rays in a restored Havana rooftop overlooking the Caribbean Sea." src="/images/solsticio-verano.png" />
    </div>
    <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest">Cápsula 01</span>
    <h3 className="text-headline-md font-headline-md text-on-surface mt-1 mb-3">Solsticio de Verano</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Siluetas hiperlivianas pensadas para transpirar elegancia a 32 grados. Linos crudos sin teñir combinados con estampados solares y vivos dorados.
                </p>
    </div>
    <div className="mt-8 pt-4 border-t border-outline-variant/30 flex justify-between items-center">
    <span className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Disponibilidad en Atelier</span>
    <a className="text-primary hover:text-primary-container font-semibold text-label-sm uppercase tracking-wider flex items-center gap-1" href="#contacto">
                  Descubrir Cápsula <span className="material-symbols-outlined text-sm">arrow_forward</span>
    </a>
    </div>
    </div>
    {/* Capsule 2 */}
    <div className="bg-surface border border-outline-variant/30 p-8 flex flex-col justify-between">
    <div>
    <div className="aspect-[16/9] overflow-hidden mb-6">
    <img className="w-full h-full object-cover" data-alt="Richly styled editorial photo representing the Brisas de Otono capsule collection: elegant tailored suits in deep midnight navy, rich terracotta, and olive green linen blends, staged inside a lavish colonial library with mahogany bookshelves and stained glass windows in La Habana." src="/images/brisas-otono.png" />
    </div>
    <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest">Cápsula 02</span>
    <h3 className="text-headline-md font-headline-md text-on-surface mt-1 mb-3">Brisas de Otoño</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
                  Gramajes estructurados con texturas táctiles, linos teñidos en añil profundo y terracota quemado, ideales para celebraciones nocturnas y eventos formales.
                </p>
    </div>
    <div className="mt-8 pt-4 border-t border-outline-variant/30 flex justify-between items-center">
    <span className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Disponibilidad en Atelier</span>
    <a className="text-primary hover:text-primary-container font-semibold text-label-sm uppercase tracking-wider flex items-center gap-1" href="#contacto">
                  Descubrir Cápsula <span className="material-symbols-outlined text-sm">arrow_forward</span>
    </a>
    </div>
    </div>
    </div>
    </div>
    </section>
    {/* SECCIÓN DE PASARELAS (RF05) */}
  </>
)

export default Temporadas
