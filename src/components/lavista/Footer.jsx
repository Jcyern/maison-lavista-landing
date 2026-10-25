import React from 'react'

const Footer = () => (
  <>
    <footer className="bg-surface-container-high dark:bg-inverse-surface border-t border-outline-variant/40 dark:border-outline/30 w-full">
    <div className="w-full px-margin-mobile md:px-margin py-space-xl max-w-7xl mx-auto flex flex-col gap-space-lg">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
    {/* Logo and Brand Bio */}
    <div className="md:col-span-5 flex flex-col gap-3">
    <p className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface tracking-widest uppercase">
                MAISON LAVISTA
              </p>
    <p className="text-body-sm font-body-sm text-on-surface-variant dark:text-outline-variant max-w-md">
                Cinco años de alta costura habanera. La armonía perfecta entre el rigor de la sastrería en lino y la vibración cromática del textil angolano.
              </p>
    </div>
    {/* Links */}
    <div className="md:col-span-4 flex flex-col gap-2">
    <p className="text-label-sm font-label-sm uppercase tracking-wider text-primary dark:text-inverse-primary font-semibold mb-1">
                Atelier &amp; Casas
              </p>
    <div className="flex flex-col gap-2">
    <a className="text-on-surface-variant dark:text-outline-variant hover:text-on-surface dark:hover:text-inverse-on-surface text-body-sm font-body-sm transition-colors duration-200" href="#sucursales">Sedes &amp; Sucursales</a>
    <a className="text-on-surface-variant dark:text-outline-variant hover:text-on-surface dark:hover:text-inverse-on-surface text-body-sm font-body-sm transition-colors duration-200" href="#taller">Oficio &amp; Maquinarias</a>
    <a className="text-on-surface-variant dark:text-outline-variant hover:text-on-surface dark:hover:text-inverse-on-surface text-body-sm font-body-sm transition-colors duration-200" href="#cuidados">Guía de Cuidados de Tela</a>
    <a className="text-on-surface-variant dark:text-outline-variant hover:text-on-surface dark:hover:text-inverse-on-surface text-body-sm font-body-sm transition-colors duration-200" href="#historia">Prensa &amp; Editoriales</a>
    <a className="text-on-surface-variant dark:text-outline-variant hover:text-on-surface dark:hover:text-inverse-on-surface text-body-sm font-body-sm transition-colors duration-200" href="#contacto">Contacto &amp; Citas</a>
    </div>
    </div>
    {/* Social Media & Gazette */}
    <div className="md:col-span-3 flex flex-col gap-3">
    <p className="text-label-sm font-label-sm uppercase tracking-wider text-primary dark:text-inverse-primary font-semibold">
                Gaceta del Atelier
              </p>
    <p className="text-body-sm font-body-sm text-on-surface-variant dark:text-outline-variant">
                Reciba nuestras invitaciones a desfiles privados, directos de YouTube y colecciones.
              </p>
    <div className="flex items-center mt-1">
    <input className="w-full bg-surface border border-outline-variant/60 text-body-sm font-body-sm py-2 px-3 focus:outline-none focus:border-primary" placeholder="Su correo" type="email" />
    <button className="bg-primary text-surface px-4 py-2 text-label-sm font-label-sm uppercase tracking-wider hover:bg-primary-container transition-colors">
                  Unirse
                </button>
    </div>
    <div className="flex items-center gap-4 mt-3">
    <a className="text-on-surface-variant hover:text-primary transition-colors text-label-sm uppercase tracking-wider font-semibold" href="#">Instagram</a>
    <a className="text-on-surface-variant hover:text-primary transition-colors text-label-sm uppercase tracking-wider font-semibold" href="#novedades">YouTube</a>
    <a className="text-on-surface-variant hover:text-primary transition-colors text-label-sm uppercase tracking-wider font-semibold" href="#">Pinterest</a>
    </div>
    </div>
    </div>
    {/* Copyright Bar */}
    <div className="pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center text-body-sm font-body-sm text-on-surface-variant dark:text-outline-variant">
    <p className="">© 2024 Maison Lavista. La Habana, Cuba. Todos los derechos reservados.</p>
    <p className="text-label-sm font-label-sm uppercase tracking-widest text-outline mt-2 sm:mt-0">Alta Costura Caribeña • 5 Aniversario</p>
    </div>
    </div>
    </footer>
  </>
)

export default Footer
