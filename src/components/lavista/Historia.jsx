import React from 'react'

const Historia = () => (
  <>
    <section className="py-20 md:py-28 bg-surface-container-low border-b border-outline-variant/30" id="historia">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
    {/* Section Header */}
    <div className="max-w-3xl mb-16">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">Herencia &amp; Trayecto</span>
    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mt-2 mb-6">
              Un Diálogo Transatlántico: Cinco Años de Maestría Sartorial
            </h2>
    <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
              Nacida en el corazón palpitante de La Habana Vieja en 2019, Maison Lavista rescata las siluetas arquitectónicas de la sastrería clásica cubana para infundirles el ritmo cromático, la geometría audaz y los textiles tribales angolanos. Cada prenda celebra un puente vivo entre el Caribe colonial y el legado textil africano.
            </p>
    </div>
    {/* Atelier Key Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
    <div className="p-8 bg-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
    <span className="material-symbols-outlined text-4xl text-primary mb-3">counter_1</span>
    <p className="text-headline-lg font-headline-lg text-primary">+1,200</p>
    <h4 className="text-headline-sm font-headline-sm text-on-surface mt-1">Piezas Únicas Confeccionadas</h4>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Cada corte es irrepetible, trazado sobre el tejido respetando el hilo y la respirabilidad de la fibra natural.
              </p>
    </div>
    <div className="p-8 bg-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
    <span className="material-symbols-outlined text-4xl text-primary mb-3">pan_tool</span>
    <p className="text-headline-lg font-headline-lg text-primary">100%</p>
    <h4 className="text-headline-sm font-headline-sm text-on-surface mt-1">Hecho a Mano en La Habana</h4>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Costureras y sastres de tercera generación dominan los plisados milimétricos y el ojalado a mano.
              </p>
    </div>
    <div className="p-8 bg-surface border border-outline-variant/30 hover:border-primary/40 transition-colors">
    <span className="material-symbols-outlined text-4xl text-primary mb-3">verified</span>
    <p className="text-headline-lg font-headline-lg text-primary">5 Años</p>
    <h4 className="text-headline-sm font-headline-sm text-on-surface mt-1">Maestría &amp; Innovación Textil</h4>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                Pioneros en articular el lino pesado con estampados wax auténticos importados de Luanda.
              </p>
    </div>
    </div>
    {/* Photographic Mosaic / Diptych of Craftsmanship */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
    <div className="md:col-span-7 relative">
    <div className="aspect-[16/10] bg-surface-container overflow-hidden">
    <img className="w-full h-full object-cover" data-alt="Close-up detail shot of experienced tailor hands executing fine artisanal steam pressing and chalk basting on an authentic Cuban linen collar in a sun-drenched atelier. Spools of thread, vintage brass tailoring shears, and vibrant African Ankara fabric swatches with rich geometric patterns rest elegantly on the aged mahogany cutting workbench." src="/images/directos-atelier.png" />
    </div>
    <p className="mt-3 text-label-sm font-label-sm text-outline tracking-wider uppercase">Planchado a vapor y asentado de pliegues en mesa de cedro</p>
    </div>
    <div className="md:col-span-5 flex flex-col gap-6">
    <div className="aspect-[4/3] bg-surface-container overflow-hidden">
    <img className="w-full h-full object-cover" data-alt="Editorial macro still-life showcasing exquisite fabric textures in high contrast. Pure white woven Cuban linen lies adjacent to an intricate, vibrant wax-print textile bursting with saturated cobalt blue, terracotta, and ochre gold. Soft natural directional lighting emphasizes the organic slub texture and artisanal weave perfection." src="/images/fabric-macro.png" />
    </div>
    <div className="p-6 bg-surface border border-outline-variant/30">
    <h4 className="text-headline-sm font-headline-sm text-primary mb-2">Filosofía de Materiales</h4>
    <p className="text-body-sm font-body-sm text-on-surface-variant">
                  Rechazamos las fibras sintéticas. En el trópico, el lino 100% europeo o caribeño no es un capricho estético, sino una necesidad arquitectónica para la piel.
                </p>
    </div>
    </div>
    </div>
    </div>
    </section>
    {/* COUTURE DIVIDER */}
    <div className="py-6 flex items-center justify-center max-w-7xl mx-auto px-margin-mobile md:px-margin">
    <div className="flex-grow h-px bg-outline-variant/40"></div>
    <div className="mx-4 text-primary">
    <span className="text-xs">◆</span>
    </div>
    <div className="flex-grow h-px bg-outline-variant/40"></div>
    </div>
    {/* GALERÍA EXCLUSIVA DE PIEZAS (CATÁLOGO DE ATELIER SIN PRECIOS) */}
  </>
)

export default Historia
