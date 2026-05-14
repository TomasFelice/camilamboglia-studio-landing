"use client";

import Image from "next/image";
import ContactCTA from "@/components/ui/ContactCTA";
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
                    <span className="text-xs tracking-[0.4em] uppercase text-[#4a403a]/50 font-medium">
                        About
                    </span>
                    <div className="w-12 h-[1px] bg-[#4a403a]/20 mt-4" />
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                    {/* Left: Photo — portrait, fills column height on desktop */}
                    <div className="scroll-reveal relative w-full aspect-[3/4] lg:aspect-auto rounded-3xl overflow-hidden bg-[#e4e2dd]">
                        <Image
                            src="/produ/about-studio-editorial.jpg"
                            alt="Cala Studio — estudio editorial"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Right: All text */}
                    <div className="flex flex-col justify-center space-y-6 lg:py-4">
                        <div>
                            <h2 className="scroll-reveal text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-[1.1] mb-0">
                                Creemos que cada proyecto es una oportunidad para
                            </h2>
                            <p className="scroll-reveal font-[family-name:var(--font-great-vibes)] font-normal tracking-normal text-6xl md:text-7xl lg:text-8xl text-[#4a403a] leading-none -mt-3 md:-mt-5">
                                transformar ideas
                            </p>
                            <p className="scroll-reveal text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a]/15 -mt-2 md:-mt-4">
                                en resultados
                            </p>
                        </div>

                        <p className="scroll-reveal text-lg md:text-xl text-[#4a403a]/70 leading-relaxed font-light pt-2">
                            Nuestro diferencial está en la forma en que abordamos los desafíos: combinamos visión estratégica con creatividad para dar vida a contenido y campañas que inspiran, posicionan y generan impacto.
                        </p>

                        <p className="scroll-reveal text-base text-[#4a403a]/50 leading-relaxed font-light">
                            Con años de experiencia en el mundo digital, trabajamos con marcas que buscan marcar la diferencia. Nos enfocamos en construir conexiones significativas entre las empresas y su audiencia, impulsando su crecimiento y posicionamiento en un mercado en constante evolución.
                        </p>

                        {/* Stats row */}
                        <div className="scroll-reveal grid grid-cols-3 gap-6 pt-6 border-t border-[#4a403a]/10">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">15+</div>
                                <div className="text-xs tracking-[0.15em] uppercase text-[#4a403a]/40 mt-2">Clientes que confían en nosotros</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">100%</div>
                                <div className="text-xs tracking-[0.15em] uppercase text-[#4a403a]/40 mt-2">Clientes satisfechos</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">∞</div>
                                <div className="text-xs tracking-[0.15em] uppercase text-[#4a403a]/40 mt-2">Ideas creativas</div>
                            </div>
                        </div>
                    </div>
                </div>

                <ContactCTA />
            </div>
        </section>
    );
}