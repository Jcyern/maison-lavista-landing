import React from 'react'

const Sucursales = () => (
  <>
    <section className="py-20 md:py-28 bg-surface border-b border-outline-variant/30" id="sucursales">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
    <div>
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">Nuestras Casas (RF06b)</span>
    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mt-2">
            Sedes, Ateliers &amp; Presencia Internacional
          </h2>
    <p className="text-body-md font-body-md text-on-surface-variant mt-2 max-w-xl">
            Espacios concebidos con la calidez del hogar cubano, vitrinas de cedro y probadores privados con luz natural.
          </p>
    </div>
    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
    <span className="material-symbols-outlined">pin_drop</span> 3 Sedes en Cuba + 2 Ateliers Itinerantes
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{/* Sede 1 */}
    <div className="group bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between hover:shadow-lg transition-all rounded-xl overflow-hidden">
      <div>
        <div className="overflow-hidden rounded-t-xl aspect-[16/10] bg-surface-container">
          <img src="/images/atelier-obispo.png" alt="Atelier Obispo - Showroom Habana Vieja" className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Sede Central</span>
          <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-2">Atelier Obispo</h3>
          <p className="text-body-sm font-body-sm text-outline mb-3">La Habana Vieja</p>
          <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
            Calle Obispo No. 248, e/ Cuba y San Ignacio. Sede principal de diseño, archivo textil histórico y pasarela de presentaciones privadas.
          </p>
        </div>
      </div>
      <div className="px-6 pb-6 pt-4 border-t border-outline-variant/40 text-xs font-medium text-on-surface">
        Lun a Sáb: 10:00 AM – 6:00 PM
      </div>
    </div>
    {/* Sede 2 */}
    <div className="group bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between hover:shadow-lg transition-all rounded-xl overflow-hidden">
      <div>
        <div className="overflow-hidden rounded-t-xl aspect-[16/10] bg-surface-container">
          <img src="/images/casa-vedado.png" alt="Casa Sartorial Vedado - Bespoke Tailoring" className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Sastrería Bespoke</span>
          <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-2">Casa Sartorial Vedado</h3>
          <p className="text-body-sm font-body-sm text-outline mb-3">El Vedado, Plaza</p>
          <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
            Calle Línea esq. Paseo. Mansión neoclásica dedicada exclusivamente a la sastrería masculina, trajes estructurados y club de caballeros.
          </p>
        </div>
      </div>
      <div className="px-6 pb-6 pt-4 border-t border-outline-variant/40 text-xs font-medium text-on-surface">
        Martes a Domingo con Cita
      </div>
    </div>
    {/* Sede 3 */}
    <div className="group bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between hover:shadow-lg transition-all rounded-xl overflow-hidden">
      <div>
        <div className="overflow-hidden rounded-t-xl aspect-[16/10] bg-surface-container">
          <img src="/images/miramar-novias.png" alt="Espacio Miramar &amp; Novias - Bridal Couture" className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Salón de Bodas</span>
          <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-2">Espacio Miramar &amp; Novias</h3>
          <p className="text-body-sm font-body-sm text-outline mb-3">Miramar, Playa</p>
          <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
            5ta Avenida y Calle 42. Salón íntimo para pruebas nupciales, selección de velos en lino transparente y coctelería de bienvenida.
          </p>
        </div>
      </div>
      <div className="px-6 pb-6 pt-4 border-t border-outline-variant/40 text-xs font-medium text-on-surface">
        Exclusivo Novias &amp; Madrinas
      </div>
    </div>
    {/* Sede 4 */}
    <div className="group bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between hover:shadow-lg transition-all rounded-xl overflow-hidden">
      <div>
        <div className="overflow-hidden rounded-t-xl aspect-[16/10] bg-surface-container">
          <img src="/images/trunk-shows.png" alt="Trunk Shows Madrid &amp; CDMX - Atelier Itinerante" className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Trunk Shows</span>
          <h3 className="text-headline-sm font-headline-sm text-on-surface mt-1 mb-2">Madrid &amp; CDMX</h3>
          <p className="text-body-sm font-body-sm text-outline mb-3">Atelier Itinerante</p>
          <p className="text-body-sm font-body-sm text-on-surface-variant leading-relaxed">
            Estancias trimestrales en Barrio de Salamanca (Madrid) y Polanco (Ciudad de México) para toma de medidas y entregas diplomáticas.
          </p>
        </div>
      </div>
      <div className="px-6 pb-6 pt-4 border-t border-outline-variant/40 text-xs font-medium text-primary">
        Próxima fecha: Noviembre 2024
      </div>
    </div></div>
    </div>
    </section>
    {/* RF07 & PROBLEM.MD - NOVEDADES, NOTICIAS & COMUNIDAD YOUTUBE */}
  </>
)

export default Sucursales
