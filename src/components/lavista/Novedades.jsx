import React from 'react'

const Novedades = () => (
  <>
    <section className="py-20 md:py-28 bg-surface-container-low border-b border-outline-variant/30" id="novedades">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
    <div className="max-w-3xl mb-14">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">Gaceta &amp; Audiovisual (RF07)</span>
    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mt-2 mb-4">
          Novedades Editoriales &amp; Directos desde el Atelier
        </h2>
    <p className="text-body-md font-body-md text-on-surface-variant">
          Mantente informado de nuestros hitos, proyectos artísticos y conéctate con nuestras charlas abiertas de sastrería.
        </p>
    </div>
    {/* Grid Noticias + Bloque YouTube */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
    {/* Tres Noticias Editoriales */}
    <div className="lg:col-span-7 space-y-6">
    <article className="p-6 bg-surface border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col sm:flex-row gap-6 items-start">
    <span className="text-headline-md font-serif text-primary/40 shrink-0">01</span>
    <div>
    <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline">Semana de la Moda • La Habana</span>
    <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-2">Maison Lavista deslumbra con su cápsula inspirada en Luanda</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
            La crítica internacional elogió el audaz diálogo entre el corte tradicional guayabera y los estampados gráficos del África subsahariana.
          </p>
    </div>
    </article>
    <article className="p-6 bg-surface border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col sm:flex-row gap-6 items-start">
    <span className="text-headline-md font-serif text-primary/40 shrink-0">02</span>
    <div>
    <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline">Arte &amp; Circularidad</span>
    <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-2">Del recorte a la alta costura: arte utilitario y residuo cero</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
            Presentamos la nueva línea de agarraderas térmicas, cojines bordados y pañuelos que rescatan el 100% de los excedentes de lino noble.
          </p>
    </div>
    </article>
    <article className="p-6 bg-surface border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col sm:flex-row gap-6 items-start">
    <span className="text-headline-md font-serif text-primary/40 shrink-0">03</span>
    <div>
    <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline">Tendencias Sartoriales</span>
    <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-2">Reinvención de la guayabera clásica para climas cosmopolitas</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
            Cuellos desestructurados, mangas modulables y botonaduras de nácar que se adaptan con soltura de La Habana a París o Nueva York.
          </p>
    </div>
    </article>
    </div>
    {/* Bloque YouTube Destacado */}
    <div className="lg:col-span-5 bg-surface p-8 border border-outline-variant/40 shadow-lg relative">
    <div className="flex items-center justify-between mb-4">
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 text-red-700 text-xs font-bold uppercase tracking-wider border border-red-200">
    <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span> EN VIVO &amp; COMUNIDAD
          </div>
    <span className="text-xs uppercase tracking-wider text-outline">YouTube Live</span>
    </div>
    {/* Simulación de Video YouTube Editorial */}
    <div className="aspect-[16/9] bg-surface-dim relative overflow-hidden flex items-center justify-center group cursor-pointer mb-6 border border-outline-variant/40">
    <img alt="Directos desde el Atelier Maison Lavista" className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500" src="/images/directos-atelier.png" />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
    <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
    </div>
    </div>
    <div className="absolute bottom-2 left-3 right-3 text-white text-xs bg-black/60 px-2 py-1 backdrop-blur-sm truncate">
            Directo #18: Plisado en vivo y patronaje de novias tropicales
          </div>
    </div>
    <h3 className="text-headline-sm font-headline-sm text-on-surface mb-2">Transmisiones desde el Atelier</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant mb-6 leading-relaxed">
          Sintonizá nuestras sesiones mensuales con los maestros costureros, resolución de dudas sobre el cuidado del lino y adelantos de bocetos.
        </p>
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-outline-variant/30">
    <div className="text-center sm:text-left">
    <p className="text-headline-sm font-headline-sm text-primary">+24k</p>
    <p className="text-label-sm font-label-sm text-outline uppercase">Suscriptores en el Mundo</p>
    </div>
    <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c4302b] text-white text-label-sm uppercase tracking-wider hover:opacity-95 transition-opacity" href="#novedades">
    <span className="material-symbols-outlined text-base">smart_display</span> Suscribirse al Canal
          </a>
    </div>
    </div>
    </div>
    </div>
    </section>
    {/* RF09 - HISTORIAS DE USUARIOS (CONFIANZA, CONFORT Y EXPERIENCIA) */}
  </>
)

export default Novedades
