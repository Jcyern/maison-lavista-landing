import React from 'react'

const Contacto = () => (
  <>
    <section className="py-20 md:py-28 bg-surface-container-low border-t border-outline-variant/30" id="contacto">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
    {/* Contact Information & Map Atmosphere */}
    <div className="lg:col-span-5 flex flex-col justify-between">
    <div>
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">Visítanos en La Habana</span>
    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mt-2 mb-6">
                  Agendar una Cita Privada
                </h2>
    <p className="text-body-md font-body-md text-on-surface-variant mb-8 leading-relaxed">
                  Nuestro taller en La Habana Vieja opera exclusivamente bajo cita previa para garantizar la privacidad y el tiempo que requiere la alta sastrería personalizada.
                </p>
    <div className="space-y-6">
    <div className="flex items-start gap-4">
    <span className="material-symbols-outlined text-primary text-2xl">location_on</span>
    <div>
    <h4 className="text-label-lg font-label-lg text-on-surface uppercase tracking-wider">Atelier Principal</h4>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                        Calle Obispo No. 248, Entre Cuba y San Ignacio<br />La Habana Vieja, Cuba
                      </p>
    </div>
    </div>
    <div className="flex items-start gap-4">
    <span className="material-symbols-outlined text-primary text-2xl">schedule</span>
    <div>
    <h4 className="text-label-lg font-label-lg text-on-surface uppercase tracking-wider">Horarios de Atención</h4>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                        Lunes a Sábado: 10:00 AM – 6:00 PM<br />(Exclusivamente con cita confirmada)
                      </p>
    </div>
    </div>
    <div className="flex items-start gap-4">
    <span className="material-symbols-outlined text-primary text-2xl">chat</span>
    <div>
    <h4 className="text-label-lg font-label-lg text-on-surface uppercase tracking-wider">Atención Directa</h4>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                        WhatsApp Concierge: +53 5284 9921<br />atelier@maisonlavista.cu
                      </p>
    </div>
    </div>
    </div>
    </div>
    {/* Stylized Havana Map Placeholder with data-location */}
    <div className="mt-8 border border-outline-variant/40 p-4 bg-surface">
    <div className="aspect-[16/9] bg-surface-container relative overflow-hidden">
    <img className="w-full h-full object-cover" data-alt="Artistic architectural map view of Old Havana with historic colonial cobblestone street grid, warm sepia and terracotta tones, marking the location of Maison Lavista near Plaza Vieja and the Atlantic coastline." data-location="Havana, Cuba" src="/images/mapa-habana.png" />
    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
    <div className="bg-surface px-4 py-2 border border-primary text-center">
    <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest font-bold">Atelier La Habana</span>
    </div>
    </div>
    </div>
    </div>
    </div>
    {/* Appointment Request Form */}
    <div className="lg:col-span-7 bg-surface p-8 md:p-12 border border-outline-variant/40 shadow-sm">
    <h3 className="text-headline-md font-headline-md text-on-surface mb-2">Solicitud de Confección</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant mb-8">
                Complete los siguientes datos y nuestro maestro sastre se comunicará para coordinar la toma de medidas o consulta virtual.
              </p>
    <form action="#" className="space-y-6" method="POST">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
    <label className="block text-label-sm font-label-sm uppercase tracking-wider text-on-surface mb-2" htmlFor="nombre">
                      Nombre Completo *
                    </label>
    <input className="w-full bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:ring-0 text-on-surface text-body-md font-body-md py-3 px-4" id="nombre" name="nombre" placeholder="Ej. Alejandro Valdés" required={true} type="text" />
    </div>
    <div>
    <label className="block text-label-sm font-label-sm uppercase tracking-wider text-on-surface mb-2" htmlFor="email">
                      Correo Electrónico *
                    </label>
    <input className="w-full bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:ring-0 text-on-surface text-body-md font-body-md py-3 px-4" id="email" name="email" placeholder="alejandro@ejemplo.com" required={true} type="email" />
    </div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
    <label className="block text-label-sm font-label-sm uppercase tracking-wider text-on-surface mb-2" htmlFor="telefono">
                      Teléfono / WhatsApp *
                    </label>
    <input className="w-full bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:ring-0 text-on-surface text-body-md font-body-md py-3 px-4" id="telefono" name="telefono" placeholder="+53 5000 0000" required={true} type="tel" />
    </div>
    <div>
    <label className="block text-label-sm font-label-sm uppercase tracking-wider text-on-surface mb-2" htmlFor="tipo_confeccion">
                      Tipo de Confección Deseada *
                    </label>
    <select className="w-full bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:ring-0 text-on-surface text-body-md font-body-md py-3 px-4" id="tipo_confeccion" name="tipo_confeccion">
    <option value="guayabera">Guayabera de Autor</option>
    <option value="bodas">Vestido de Novia / Nupcial</option>
    <option value="traje">Traje Sartorial a Medida</option>
    <option value="kimono">Kimono Cubano Fluido</option>
    <option value="accesorios">Agarraderas &amp; Arte Textil</option>
    <option value="otro">Colección Personalizada / Otro</option>
    </select>
    </div>
    </div>
    <div>
    <label className="block text-label-sm font-label-sm uppercase tracking-wider text-on-surface mb-2" htmlFor="fecha">
                    Fecha Tentativa para Visita o Entrega
                  </label>
    <input className="w-full bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:ring-0 text-on-surface text-body-md font-body-md py-3 px-4" id="fecha" name="fecha" type="date" />
    </div>
    <div>
    <label className="block text-label-sm font-label-sm uppercase tracking-wider text-on-surface mb-2" htmlFor="mensaje">
                    Medidas Aproximadas o Notas de Diseño
                  </label>
    <textarea className="w-full bg-surface-container-lowest border border-outline-variant/60 focus:border-primary focus:ring-0 text-on-surface text-body-md font-body-md py-3 px-4" id="mensaje" name="mensaje" placeholder="Indique detalles sobre su ocasión especial, preferencias de tejidos o dudas para nuestro equipo de patronaje..." rows="4"></textarea>
    </div>
    <div className="flex items-center gap-3">
    <input className="w-4 h-4 border border-outline text-primary focus:ring-0 rounded-none" id="privacidad" name="privacidad" required={true} type="checkbox" />
    <label className="text-body-sm font-body-sm text-on-surface-variant" htmlFor="privacidad">
                    Acepto el tratamiento de mis datos personales para la coordinación de la cita en atelier.
                  </label>
    </div>
    <button className="w-full py-4 bg-primary text-surface hover:bg-primary-container text-label-lg font-label-lg uppercase tracking-widest transition-all duration-300" type="submit">
                  Solicitar Cita de Confección
                </button>
    </form>
    </div>
    </div>
    </div>
    </section>
    {/* FOOTER */}
  </>
)

export default Contacto
