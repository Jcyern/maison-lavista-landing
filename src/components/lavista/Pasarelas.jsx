import React from 'react'

const Pasarelas = () => (
  <>
    <section className="py-20 md:py-28 bg-surface-container-low border-b border-outline-variant/30 relative overflow-hidden" id="pasarelas">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
    {/* Header Editorial de Alta Costura */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
    <div className="max-w-3xl">
    <div className="inline-flex items-center gap-2 mb-3">
    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">DESFILES &amp; ALTA COSTURA EN MOVIMIENTO — SEMANA DE LA MODA LA HABANA</span>
    </div>
    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface leading-tight">
              La Pasarela Habanera: Donde la Tradición Desafía el Tiempo
            </h2>
    <p className="text-body-md md:text-body-lg font-body-md md:font-body-lg text-on-surface-variant mt-4 leading-relaxed">
              Bajo los arcos de piedra colonial y la luz dorada del crepúsculo cubano, la alta costura cobra vida. Nuestras piezas de pasarela aúnan la soltura de los linos más puros con la geometría dramática de los telares angolanos, conquistando la aclamación de la crítica y celebrando el arte en movimiento continuo.
            </p>
    </div>
    <div className="flex items-center gap-4">
    <span className="material-symbols-outlined text-primary text-4xl hidden md:block">photo_camera</span>
    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider hidden md:block border-l border-outline-variant/60 pl-4">
              Fotografía Editorial de Catwalk<br />Palacetes de La Habana Vieja
            </p>
    </div>
    </div>
    {/* Galería de 3 Looks Aclamados en Pasarela */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Look 01: IMAGE_6 */}
    <article className="group bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
    <div>
    <div className="aspect-[3/4] overflow-hidden relative">
    <img alt="Look 01 Pasarela La Habana - Vestido Escultórico Volutas del Trópico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/look-01-vestido.png" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
    <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 text-label-sm font-label-sm text-primary uppercase tracking-widest">
                  LOOK 01 — APERTURA DE DESFILE
                </span>
    <div className="absolute bottom-4 left-4 right-4 text-white">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary-fixed">140 Horas de Patronaje</span>
    </div>
    </div>
    <div className="p-6">
    <h3 className="text-headline-sm font-headline-sm text-on-surface">Volutas del Trópico: Vestido Escultórico</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Linos teñidos con pigmentos naturales de la tierra y flecos de seda de autor. Galardonado con el Premio del Público en La Habana Fashion Week.
                </p>
    <div className="mt-4 flex items-center gap-2">
    <span className="w-4 h-4 rounded-full bg-[#833116] border border-outline-variant" title="Terracota"></span>
    <span className="w-4 h-4 rounded-full bg-[#183a8a] border border-outline-variant" title="Cobalto"></span>
    <span className="w-4 h-4 rounded-full bg-[#c5a059] border border-outline-variant" title="Azafrán"></span>
    <span className="text-label-sm font-label-sm text-outline ml-2">Premio del Público</span>
    </div>
    </div>
    </div>
    <div className="p-6 pt-0">
    <a className="block text-center py-3 bg-primary text-surface hover:bg-primary-container text-label-sm font-label-sm uppercase tracking-widest transition-colors duration-200" href="#contacto">
                Solicitar Pieza de Pasarela
              </a>
    </div>
    </article>
    {/* Look 02: IMAGE_7 */}
    <article className="group bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
    <div>
    <div className="aspect-[3/4] overflow-hidden relative">
    <img alt="Look 02 Pasarela La Habana - Guayabera Desestructurada Vedado" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/look-02-guayabera.png" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
    <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 text-label-sm font-label-sm text-primary uppercase tracking-widest">
                  LOOK 02 — SASTRERÍA CARIBEÑA
                </span>
    <div className="absolute bottom-4 left-4 right-4 text-white">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary-fixed">68 Horas de Costura a Mano</span>
    </div>
    </div>
    <div className="p-6">
    <h3 className="text-headline-sm font-headline-sm text-on-surface">Guayabera Desestructurada 'Vedado'</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Alforzado milimétrico contemporáneo y corte fluido en lino belga crudo, combinando elegancia colonial con soltura moderna.
                </p>
    <div className="mt-4 flex items-center gap-2">
    <span className="w-4 h-4 rounded-full bg-[#EDE7DD] border border-outline-variant" title="Lino Marfil"></span>
    <span className="w-4 h-4 rounded-full bg-[#dcc1b9] border border-outline-variant" title="Arena Pura"></span>
    <span className="w-4 h-4 rounded-full bg-[#89726c] border border-outline-variant" title="Bespoke Natural"></span>
    <span className="text-label-sm font-label-sm text-outline ml-2">Lino Belga Crudo</span>
    </div>
    </div>
    </div>
    <div className="p-6 pt-0">
    <a className="block text-center py-3 border border-primary text-primary hover:bg-primary hover:text-surface text-label-sm font-label-sm uppercase tracking-widest transition-colors duration-200" href="#contacto">
                Solicitar a Medida
              </a>
    </div>
    </article>
    {/* Look 03: IMAGE_8 */}
    <article className="group bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
    <div>
    <div className="aspect-[3/4] overflow-hidden relative">
    <img alt="Look 03 Pasarela La Habana - Manto de Gala Catedralicio Gran Finale" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/images/look-03-manto.png" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
    <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 text-label-sm font-label-sm text-primary uppercase tracking-widest">
                  LOOK 03 — GRAN FINALE
                </span>
    <div className="absolute bottom-4 left-4 right-4 text-white">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary-fixed">210 Horas de Filigrana</span>
    </div>
    </div>
    <div className="p-6">
    <h3 className="text-headline-sm font-headline-sm text-on-surface">Manto de Gala 'Catedralicio'</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  Capa monumental tejida en seda y lino con brocados patrimoniales y tonalidades azafrán e índigo colonial. Ovación de pie del público.
                </p>
    <div className="mt-4 flex items-center gap-2">
    <span className="w-4 h-4 rounded-full bg-[#c5a059] border border-outline-variant" title="Azafrán"></span>
    <span className="w-4 h-4 rounded-full bg-[#3d5aab] border border-outline-variant" title="Índigo"></span>
    <span className="w-4 h-4 rounded-full bg-[#833116] border border-outline-variant" title="Coral"></span>
    <span className="text-label-sm font-label-sm text-outline ml-2">Brocados Patrimoniales</span>
    </div>
    </div>
    </div>
    <div className="p-6 pt-0">
    <a className="block text-center py-3 bg-primary text-surface hover:bg-primary-container text-label-sm font-label-sm uppercase tracking-widest transition-colors duration-200" href="#contacto">
                Encargo Privado de Gala
              </a>
    </div>
    </article>
    </div>
    {/* Barra de Estadísticas y Aclamación de Pasarela */}
    <div className="mt-16 bg-surface border border-outline-variant/40 p-8 md:p-10 shadow-sm">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
    <div className="flex items-center gap-4 justify-center md:justify-start">
    <span className="material-symbols-outlined text-4xl text-primary">award_star</span>
    <div>
    <p className="text-headline-sm font-headline-sm text-primary">98% Aclamación</p>
    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider mt-0.5">Crítica Internacional Especializada</p>
    </div>
    </div>
    <div className="flex items-center gap-4 justify-center md:justify-start border-y md:border-y-0 md:border-x border-outline-variant/40 py-4 md:py-0 md:px-6">
    <span className="material-symbols-outlined text-4xl text-primary">location_city</span>
    <div>
    <p className="text-headline-sm font-headline-sm text-primary">12 Looks Exclusivos</p>
    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider mt-0.5">Palacio de los Capitanes Generales</p>
    </div>
    </div>
    <div className="flex items-center gap-4 justify-center md:justify-start">
    <span className="material-symbols-outlined text-4xl text-primary">lock</span>
    <div>
    <p className="text-headline-sm font-headline-sm text-primary">Colección Limitada</p>
    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider mt-0.5">Disponible Solo por Encargo Privado</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    {/* RF04 - MAQUINARIAS Y OFICIO DE TALLER */}
  </>
)

export default Pasarelas
