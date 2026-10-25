import React from 'react'

const Coleccion = () => (
  <>
    <section className="py-20 md:py-28 bg-surface" id="coleccion">
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
    {/* Section Title & Filter Tabs */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
    <div>
    <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">Catálogo de Atelier</span>
    <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mt-2">
                Colección Selecta Maison Lavista
              </h2>
    <p className="text-body-md font-body-md text-on-surface-variant mt-2 max-w-xl">
                Piezas concebidas para trascender modas efímeras. Confección individual y numerada disponible para encargo privado.
              </p>
    </div>
    {/* Filter Controls */}
    <div className="flex flex-wrap gap-2">
    <button className="px-5 py-2.5 bg-primary text-surface text-label-sm font-label-sm uppercase tracking-wider">
                Todas las Piezas
              </button>
    <button className="px-5 py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-label-sm uppercase tracking-wider transition-colors">
                Guayaberas de Autor
              </button>
    <button className="px-5 py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-label-sm uppercase tracking-wider transition-colors">
                Agarraderas &amp; Arte Textil
              </button>
    <button className="px-5 py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-label-sm uppercase tracking-wider transition-colors">
                Sartorial a Medida
              </button>
    </div>
    </div>
    {/* Product Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Item 1: Guayabera 'Habana Imperial' */}
    <article className="group bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
    <div>
    <div className="aspect-[4/5] overflow-hidden relative">
    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Editorial lookbook photograph of a handsome male model in a high-ceiling Havana salon wearing a pristine ivory white linen guayabera shirt named Habana Imperial. The guayabera features striking contrasting Angolan printed silk fabric along the placket, collar, and sleeve cuffs in deep cobalt, burnt orange, and emerald motifs. Natural warm window illumination." src="/images/lookbook-male.png" />
    <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 text-label-sm font-label-sm text-primary uppercase tracking-widest">
                    Guayabera de Autor
                  </span>
    </div>
    <div className="p-6">
    <h3 className="text-headline-sm font-headline-sm text-on-surface">Guayabera 'Habana Imperial'</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                    Lino blanco marfil de hilatura densa con vivos de estampado angolano en tapeta interna, canesú y cuello estructurado.
                  </p>
    <div className="mt-4 flex items-center gap-2">
    <span className="w-4 h-4 rounded-full bg-[#EDE7DD] border border-outline-variant" title="Lino Marfil"></span>
    <span className="w-4 h-4 rounded-full bg-[#183a8a] border border-outline-variant" title="Cobalto Africano"></span>
    <span className="w-4 h-4 rounded-full bg-[#833116] border border-outline-variant" title="Terracota"></span>
    <span className="text-label-sm font-label-sm text-outline ml-2">Fibras 100% Naturales</span>
    </div>
    </div>
    </div>
    <div className="p-6 pt-0">
    <a className="block text-center py-3 border border-primary text-primary hover:bg-primary hover:text-surface text-label-sm font-label-sm uppercase tracking-widest transition-colors duration-200" href="#contacto">
                  Consultar Confección
                </a>
    </div>
    </article>
    {/* Item 2: Guayabera 'Malecón al Ocaso' */}
    <article className="group bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
    <div>
    <div className="aspect-[4/5] overflow-hidden relative">
    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A fashion-forward model photographed during golden hour against the weathered stone walls of the Havana seaside promenade, wearing a rich terracotta linen guayabera with masterfully executed microscopic vertical pleating, mother-of-pearl buttons, and tonal heritage stitching. The atmosphere radiates warmth, sophistication, and Caribbean architectural grandeur." src="/images/golden-hour-model.png" />
    <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 text-label-sm font-label-sm text-primary uppercase tracking-widest">
                    Edición Limitada
                  </span>
    </div>
    <div className="p-6">
    <h3 className="text-headline-sm font-headline-sm text-on-surface">Guayabera 'Malecón al Ocaso'</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                    Terracota cálido bañado en tintes vegetales, adornado con 48 alforzas artesanales milimétricas y botones de nácar genuino.
                  </p>
    <div className="mt-4 flex items-center gap-2">
    <span className="w-4 h-4 rounded-full bg-[#833116] border border-outline-variant" title="Terracota Ocaso"></span>
    <span className="w-4 h-4 rounded-full bg-[#dcc1b9] border border-outline-variant" title="Arena"></span>
    <span className="text-label-sm font-label-sm text-outline ml-2">48 Alforzas Hechas a Mano</span>
    </div>
    </div>
    </div>
    <div className="p-6 pt-0">
    <a className="block text-center py-3 border border-primary text-primary hover:bg-primary hover:text-surface text-label-sm font-label-sm uppercase tracking-widest transition-colors duration-200" href="#contacto">
                  Solicitar Medidas
                </a>
    </div>
    </article>
    {/* Item 3: Agarraderas 'Orunmila' */}
    <article className="group bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
    <div>
    <div className="aspect-[4/5] overflow-hidden relative">
    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Luxurious high-end product still life of handcrafted kitchen potholders and tabletop textile art displayed on a raw travertine stone plinth. The textiles feature heavily quilted organic cotton layered with vibrant Afro-Angolan graphic wax prints in energetic yellow-green, warm rust, and deep charcoal. The surrounding setting is minimalist, warm, and sunlit." src="/images/kimono-product.png" />
    <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 text-label-sm font-label-sm text-primary uppercase tracking-widest">
                    Arte Utilitario
                  </span>
    </div>
    <div className="p-6">
    <h3 className="text-headline-sm font-headline-sm text-on-surface">Agarraderas de Mesa 'Orunmila'</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                    Arte utilitario en algodón acolchado de alto gramaje con motivos gráficos afrocaribeños y lazo de colgar en cuero vacuno.
                  </p>
    <div className="mt-4 flex items-center gap-2">
    <span className="w-4 h-4 rounded-full bg-[#316f49] border border-outline-variant" title="Verde Sagrado"></span>
    <span className="w-4 h-4 rounded-full bg-[#ffd8cc] border border-outline-variant" title="Ocre Suave"></span>
    <span className="text-label-sm font-label-sm text-outline ml-2">Acolchado Térmico Resistente</span>
    </div>
    </div>
    </div>
    <div className="p-6 pt-0">
    <a className="block text-center py-3 border border-primary text-primary hover:bg-primary hover:text-surface text-label-sm font-label-sm uppercase tracking-widest transition-colors duration-200" href="#contacto">
                  Consultar Pieza
                </a>
    </div>
    </article>
    {/* Item 4: Agarradera 'Cobalto Colonial' */}
    <article className="group bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
    <div>
    <div className="aspect-[4/5] overflow-hidden relative">
    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Detailed studio photo of an artisan textile trivet and luxury kitchen accessory crafted with geometric African print fabric in brilliant colonial cobalt blue, mustard yellow, and stark black line-work. The piece is bordered with hand-stitched tan leather piping and rests beside artisan Cuban ceramic tableware and lush palm leaves." src="/images/trivet-artisan.png" />
    <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 text-label-sm font-label-sm text-primary uppercase tracking-widest">
                    Accesorio de Autor
                  </span>
    </div>
    <div className="p-6">
    <h3 className="text-headline-sm font-headline-sm text-on-surface">Agarradera 'Cobalto Colonial'</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                    Geometría tropical inspirada en la azulejería habanera con ribetes de cuero curtido al tanino vegetal y doble guata aislante.
                  </p>
    <div className="mt-4 flex items-center gap-2">
    <span className="w-4 h-4 rounded-full bg-[#183a8a] border border-outline-variant" title="Cobalto Real"></span>
    <span className="w-4 h-4 rounded-full bg-[#89726c] border border-outline-variant" title="Cuero Natural"></span>
    <span className="text-label-sm font-label-sm text-outline ml-2">Edición Coleccionable</span>
    </div>
    </div>
    </div>
    <div className="p-6 pt-0">
    <a className="block text-center py-3 border border-primary text-primary hover:bg-primary hover:text-surface text-label-sm font-label-sm uppercase tracking-widest transition-colors duration-200" href="#contacto">
                  Consultar Pieza
                </a>
    </div>
    </article>
    {/* Item 5: Traje a Medida 'Vedado' */}
    <article className="group bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
    <div>
    <div className="aspect-[4/5] overflow-hidden relative">
    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Elegant full-length editorial photograph of a refined gentleman standing in a lush tropical garden terrace in Vedado Havana, wearing a bespoke two-piece suit tailored from toasted oatmeal Cuban linen. The suit jacket is slightly unbuttoned to reveal a flash of custom African silk lining in rich copper and indigo geometric prints." src="/images/editorial-woman.png" />
    <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 text-label-sm font-label-sm text-primary uppercase tracking-widest">
                    Sartorial Bespoke
                  </span>
    </div>
    <div className="p-6">
    <h3 className="text-headline-sm font-headline-sm text-on-surface">Traje a Medida 'Vedado'</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                    Conjunto de dos piezas en lino tostado de alta caída con forro interior de seda pura estampada en Luanda. Sastrería desestructurada.
                  </p>
    <div className="mt-4 flex items-center gap-2">
    <span className="w-4 h-4 rounded-full bg-[#dcdad5] border border-outline-variant" title="Lino Tostado"></span>
    <span className="w-4 h-4 rounded-full bg-[#3d5aab] border border-outline-variant" title="Seda Índigo"></span>
    <span className="text-label-sm font-label-sm text-outline ml-2">Corte Desestructurado Tropical</span>
    </div>
    </div>
    </div>
    <div className="p-6 pt-0">
    <a className="block text-center py-3 border border-primary text-primary hover:bg-primary hover:text-surface text-label-sm font-label-sm uppercase tracking-widest transition-colors duration-200" href="#contacto">
                  Solicitar Medidas
                </a>
    </div>
    </article>
    {/* Item 6: Kimono Cubano 'Trinidad' */}
    <article className="group bg-surface-container-lowest border border-outline-variant/30 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
    <div>
    <div className="aspect-[4/5] overflow-hidden relative">
    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High-fashion runway style photo of a female model captured in fluid motion through the colonial cobblestone streets of Trinidad Cuba, wearing a billowing avant-garde Cuban kimono robe. The garment integrates bold Angolan wax prints in luminous electric blue and warm ochre, paired with natural raw linen panels that float gracefully in the warm breeze." src="/images/runway-woman.png" />
    <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 text-label-sm font-label-sm text-primary uppercase tracking-widest">
                    Couture Fluido
                  </span>
    </div>
    <div className="p-6">
    <h3 className="text-headline-sm font-headline-sm text-on-surface">Kimono Cubano 'Trinidad'</h3>
    <p className="text-body-sm font-body-sm text-on-surface-variant mt-2">
                    Corte fluido de mangas drapeadas con inserciones angolanas en tonos ocre mineral y azul eléctrico sobre cuerpo de lino crudo.
                  </p>
    <div className="mt-4 flex items-center gap-2">
    <span className="w-4 h-4 rounded-full bg-[#183a8a] border border-outline-variant" title="Azul Eléctrico"></span>
    <span className="w-4 h-4 rounded-full bg-[#c5a059] border border-outline-variant" title="Ocre Mineral"></span>
    <span className="text-label-sm font-label-sm text-outline ml-2">Pieza Unisex Versátil</span>
    </div>
    </div>
    </div>
    <div className="p-6 pt-0">
    <a className="block text-center py-3 border border-primary text-primary hover:bg-primary hover:text-surface text-label-sm font-label-sm uppercase tracking-widest transition-colors duration-200" href="#contacto">
                  Consultar Pieza
                </a>
    </div>
    </article>
    </div>
    </div>
    </section>
    {/* OFERTAS POR ESTACIÓN (COLECCIONES DE TEMPORADA) */}
  </>
)

export default Coleccion
