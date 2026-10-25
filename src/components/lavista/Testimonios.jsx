import React from 'react'

const Testimonios = () => (
  <>
    <section className="py-20 md:py-28 bg-surface border-b border-outline-variant/30">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
    <div className="text-center max-w-2xl mx-auto mb-16">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">Voces de Nuestra Comunidad (RF09)</span>
    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mt-2 mb-4">
          Historias de Confianza, Confort y Excelencia
        </h2>
    <p className="text-body-md font-body-md text-on-surface-variant">
          Desde bodas inolvidables en La Habana hasta galas de estado en Europa. Esto dicen quienes visten nuestras creaciones.
        </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Testimonio 1 */}
    <div className="p-8 bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between shadow-sm">
    <div>
    <div className="flex items-center text-primary mb-4 gap-1">
    <span className="material-symbols-outlined text-sm">star</span>
    <span className="material-symbols-outlined text-sm">star</span>
    <span className="material-symbols-outlined text-sm">star</span>
    <span className="material-symbols-outlined text-sm">star</span>
    <span className="material-symbols-outlined text-sm">star</span>
    </div>
    <p className="font-serif italic text-body-md text-on-surface leading-relaxed mb-6">
            "Mi vestido a medida para la gala nacional fue el balance exacto entre frescura bajo 32 grados y elegancia impecable. El confort del lino cubano es inigualable."
          </p>
    </div>
    <div className="pt-4 border-t border-outline-variant/40">
    <p className="font-headline-sm text-sm font-semibold text-primary">Dra. Carmen Valdés</p>
    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">La Habana, Cuba</p>
    </div>
    </div>
    {/* Testimonio 2 */}
    <div className="p-8 bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between shadow-sm">
    <div>
    <div className="flex items-center text-primary mb-4 gap-1">
    <span className="material-symbols-outlined text-sm">star</span>
    <span className="material-symbols-outlined text-sm">star</span>
    <span className="material-symbols-outlined text-sm">star</span>
    <span className="material-symbols-outlined text-sm">star</span>
    <span className="material-symbols-outlined text-sm">star</span>
    </div>
    <p className="font-serif italic text-body-md text-on-surface leading-relaxed mb-6">
            "Viajé a La Habana para casarme y Maison Lavista me confeccionó la guayabera ceremonial más sofisticada de mi vida. Puntualidad y trato de alta costura a precios justos."
          </p>
    </div>
    <div className="pt-4 border-t border-outline-variant/40">
    <p className="font-headline-sm text-sm font-semibold text-primary">Jean-Luc Dupont</p>
    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">París, Francia</p>
    </div>
    </div>
    {/* Testimonio 3 */}
    <div className="p-8 bg-surface-container-low border border-outline-variant/30 flex flex-col justify-between shadow-sm">
    <div>
    <div className="flex items-center text-primary mb-4 gap-1">
    <span className="material-symbols-outlined text-sm">star</span>
    <span className="material-symbols-outlined text-sm">star</span>
    <span className="material-symbols-outlined text-sm">star</span>
    <span className="material-symbols-outlined text-sm">star</span>
    <span className="material-symbols-outlined text-sm">star</span>
    </div>
    <p className="font-serif italic text-body-md text-on-surface leading-relaxed mb-6">
            "El equipo nos asesoró en cada prueba. Sentimos una calidez única y un respeto por nuestra historia que se reflejó en cada puntada. Nuestro matrimonio tuvo su alma caribeña."
          </p>
    </div>
    <div className="pt-4 border-t border-outline-variant/40">
    <p className="font-headline-sm text-sm font-semibold text-primary">Sofía &amp; Alejandro</p>
    <p className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Novios Maison Lavista</p>
    </div>
    </div>
    </div>
    </div>
    </section>
    {/* RF10 - GUÍA INTERACTIVA DE CUIDADO DE TEXTILES SEGÚN TIPO DE TELA */}
  </>
)

export default Testimonios
