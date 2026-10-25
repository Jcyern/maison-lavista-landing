import React from 'react'

const Taller = () => (
  <>
    <section className="py-20 md:py-28 bg-surface border-b border-outline-variant/30" id="taller">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
    <div className="max-w-3xl mb-16">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">Oficio, Arte &amp; Precisión Técnica (RF04)</span>
    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mt-2 mb-6">
          Las Maquinarias de Precisión de Nuestro Taller
        </h2>
    <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
          La magia de Maison Lavista es el encuentro entre manos maestras y herramientas especializadas. Conocé la tecnología tradicional y de precisión con la que modelamos el lino natural y los tejidos angolanos sin alterar su fibra viva.
        </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Máquina 1 */}
    <div className="p-8 bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
    <div><div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-surface-container"><img src="/images/maquina-industrial.png" alt="Máquina Industrial de Precisión" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-6">
    <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
    </div>
    <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline">Puntada Recta Calibrada</span>
    <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-3">Máquina Industrial de Precisión</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
            Especializada en linos de alto y medio gramaje. Su arrastre diferencial permite alforzas milimétricas y costuras invisibles sin fruncidos indeseados.
          </p>
    </div>
    <div className="pt-4 border-t border-outline-variant/30 text-xs font-semibold uppercase tracking-wider text-primary">
          Beneficio: Costuras indestructibles y alineación perfecta
        </div>
    </div>
    {/* Máquina 2 */}
    <div className="p-8 bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
    <div><div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-surface-container"><img src="/images/plisadora.png" alt="Plisadora Tradicional Habanera" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-6">
    <span className="material-symbols-outlined text-2xl">line_weight</span>
    </div>
    <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline">Plisado Canónico</span>
    <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-3">Plisadora Tradicional Habanera</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
            Dispositivo mecánico de engranajes ajustados a mano para trazar con exactitud quirúrgica las 28 alforzas canónicas de la guayabera clásica caribeña.
          </p>
    </div>
    <div className="pt-4 border-t border-outline-variant/30 text-xs font-semibold uppercase tracking-wider text-primary">
          Beneficio: Geometría rigurosa sin desgarros del lino
        </div>
    </div>
    {/* Máquina 3 */}
    <div className="p-8 bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
    <div><div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-surface-container"><img src="/images/centro-vapor.png" alt="Centro de Vapor en Cedro Real" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-6">
    <span className="material-symbols-outlined text-2xl">iron</span>
    </div>
    <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline">Moldeado Botánico</span>
    <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-3">Centro de Vapor en Cedro Real</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
            Generador de vapor seco de alta presión asistido por tablas de cedro cubano. Asienta solapas y hombros sin quebrar la respirabilidad de la fibra viva.
          </p>
    </div>
    <div className="pt-4 border-t border-outline-variant/30 text-xs font-semibold uppercase tracking-wider text-primary">
          Beneficio: Caída natural y fragancia sutil a madera noble
        </div>
    </div>
    {/* Máquina 4 */}
    <div className="p-8 bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between">
    <div><div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-surface-container"><img src="/images/overlock-telar.png" alt="Overlock &amp; Telar Artesanal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-6">
    <span className="material-symbols-outlined text-2xl">texture</span>
    </div>
    <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline">Remallado de Telar</span>
    <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-3">Overlock &amp; Telar Artesanal</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed mb-4">
            Aparato especializado en orillos y ensamblaje de tejidos wax angolanos densos, protegiendo los bordes contra deshilaches por humedad tropical.
          </p>
    </div>
    <div className="pt-4 border-t border-outline-variant/30 text-xs font-semibold uppercase tracking-wider text-primary">
          Beneficio: Pulcritud interior digna de alta costura
        </div>
    </div>
    </div>
    </div>
    </section>
    {/* SECCIÓN DE BODAS & NOVIAS (RF06 con IMAGE_9 y IMAGE_5) */}
  </>
)

export default Taller
