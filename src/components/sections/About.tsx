"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section
            id="about"
            ref={sectionRef}
            className="w-full py-24 md:py-36 bg-white"
        >
            <div className="container px-6 md:px-10 mx-auto">
                {/* Section label */}
                <div className="scroll-reveal mb-16">
                    <span className="text-xs tracking-[0.4em] uppercase text-[#7b0e0e] font-medium">
                        About
                    </span>
                    <div className="w-12 h-[1px] bg-[#7b0e0e]/30 mt-4" />
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Philosophy */}
                    <div className="space-y-8">
                        <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a1a] leading-[1.1]">
                            Creemos que cada proyecto es una oportunidad para
                            <span className="text-[#4a403a]/25"> transformar ideas en resultados</span>
                        </h2>
                    </div>

                    {/* Right: Description */}
                    <div className="space-y-8 lg:pt-8">
                        <p className="scroll-reveal text-lg md:text-xl text-[#4a403a]/70 leading-relaxed font-light">
                            Nuestro diferencial está en la forma en que abordamos los desafíos: combinamos visión estratégica con creatividad para dar vida a contenido y campañas que inspiran, posicionan y generan impacto.
                        </p>

                        <p className="scroll-reveal text-base text-[#4a403a]/50 leading-relaxed font-light">
                            Con años de experiencia en el mundo digital, trabajamos con marcas que buscan marcar la diferencia. Nos enfocamos en construir conexiones significativas entre las empresas y su audiencia, impulsando su crecimiento y posicionamiento en un mercado en constante evolución.
                        </p>

                        {/* Stats row */}
                        <div className="scroll-reveal grid grid-cols-3 gap-6 pt-8 border-t border-[#4a403a]/10">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-[#7b0e0e]">15+</div>
                                <div className="text-xs tracking-[0.15em] uppercase text-[#4a403a]/40 mt-2">Marcas que confían en nosotros</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-[#7b0e0e]">100%</div>
                                <div className="text-xs tracking-[0.15em] uppercase text-[#4a403a]/40 mt-2">Clientes satisfechos</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-[#7b0e0e]">∞</div>
                                <div className="text-xs tracking-[0.15em] uppercase text-[#4a403a]/40 mt-2">Ideas creativas</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
