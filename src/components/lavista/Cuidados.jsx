import React from 'react'

const Cuidados = () => (
  <>
    <section className="py-20 md:py-28 bg-surface-container-high border-b border-outline-variant/30" id="cuidados">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
    <div className="max-w-3xl mb-14">
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">Conservación Textil (RF10)</span>
    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mt-2 mb-4">
          Guía de Cuidado para Prendas de Lujo Tropical
        </h2>
    <p className="text-body-md font-body-md text-on-surface-variant">
          Las fibras nobles merecen un tratamiento paciente. Sigue estas recomendaciones según el tejido de tu prenda para garantizar su longevidad por décadas.
        </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Fibra 1: Lino Puro */}
    <div className="bg-surface p-8 border border-outline-variant/40 flex flex-col justify-between shadow-sm">
    <div>
    <div className="flex items-center justify-between mb-4">
    <span className="text-xs uppercase tracking-widest text-primary font-bold">100% Lino Natural</span>
    <span className="material-symbols-outlined text-primary text-2xl">spa</span>
    </div>
    <h3 className="text-headline-sm font-headline-sm text-on-surface mb-3">Lino Antillano &amp; Europeo</h3>
    <ul className="space-y-3 text-body-sm font-body-sm text-on-surface-variant">
    <li className="flex items-start gap-2">
    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
    <span className=""><strong>Lavado:</strong> A mano con agua fría y jabón neutro. Evitar centrifugados bruscos.</span>
    </li>
    <li className="flex items-start gap-2">
    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
    <span className=""><strong>Secado:</strong> A la sombra en percha ancha de madera para que mantenga el quiebre.</span>
    </li>
    <li className="flex items-start gap-2">
    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
    <span className=""><strong>Planchado:</strong> Ligeramente humedecido con vapor a alta temperatura.</span>
    </li>
    </ul>
    </div>
    <div className="mt-6 pt-4 border-t border-outline-variant/30 text-xs text-outline uppercase tracking-wider">
          Regla de oro: El arrugado noble es sello de autenticidad.
        </div>
    </div>
    {/* Fibra 2: Wax Angolano */}
    <div className="bg-surface p-8 border border-outline-variant/40 flex flex-col justify-between shadow-sm">
    <div>
    <div className="flex items-center justify-between mb-4">
    <span className="text-xs uppercase tracking-widest text-primary font-bold">Algodón Wax Genuino</span>
    <span className="material-symbols-outlined text-primary text-2xl">palette</span>
    </div>
    <h3 className="text-headline-sm font-headline-sm text-on-surface mb-3">Estampados Angolanos</h3>
    <ul className="space-y-3 text-body-sm font-body-sm text-on-surface-variant">
    <li className="flex items-start gap-2">
    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
    <span className=""><strong>Lavado:</strong> Siempre del revés en ciclo suave a 30°C máximo.</span>
    </li>
    <li className="flex items-start gap-2">
    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
    <span className=""><strong>Blanqueadores:</strong> Prohibidos completamente; destruyen los tintes vegetales.</span>
    </li>
    <li className="flex items-start gap-2">
    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
    <span className=""><strong>Planchado:</strong> Por la cara interna del tejido a temperatura moderada.</span>
    </li>
    </ul>
    </div>
    <div className="mt-6 pt-4 border-t border-outline-variant/30 text-xs text-outline uppercase tracking-wider">
          Regla de oro: Guardar en lugar seco, libre de luz solar directa.
        </div>
    </div>
    {/* Fibra 3: Sedas y Mezclas Nupciales */}
    <div className="bg-surface p-8 border border-outline-variant/40 flex flex-col justify-between shadow-sm">
    <div>
    <div className="flex items-center justify-between mb-4">
    <span className="text-xs uppercase tracking-widest text-primary font-bold">Alta Costura &amp; Novias</span>
    <span className="material-symbols-outlined text-primary text-2xl">diamond</span>
    </div>
    <h3 className="text-headline-sm font-headline-sm text-on-surface mb-3">Sedas Salvajes &amp; Velos</h3>
    <ul className="space-y-3 text-body-sm font-body-sm text-on-surface-variant">
    <li className="flex items-start gap-2">
    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
    <span className=""><strong>Limpieza:</strong> Exclusivamente en seco ecológica profesional certificada.</span>
    </li>
    <li className="flex items-start gap-2">
    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
    <span className=""><strong>Vaporizado:</strong> Vertical suave a distancia sin contacto directo de plancha.</span>
    </li>
    <li className="flex items-start gap-2">
    <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
    <span className=""><strong>Guardado:</strong> En funda de lino transpirable Maison Lavista; nunca plásticos.</span>
    </li>
    </ul>
    </div>
    <div className="mt-6 pt-4 border-t border-outline-variant/30 text-xs text-outline uppercase tracking-wider">
          Regla de oro: Proteger de perfumes y laca directamente sobre la seda.
        </div>
    </div>
    </div>
    </div>
    </section>
    {/* RF11 - COMPROMISO SOCIAL Y DONACIONES COMUNITARIAS */}
  </>
)

export default Cuidados
