"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Upload } from "lucide-react";

export default function Talent() {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section
            id="talent"
            ref={sectionRef}
            className="w-full py-24 md:py-36 bg-[#f5f4f0]"
        >
            <div className="container px-6 md:px-10 mx-auto">
                {/* Section label */}
                <div className="scroll-reveal mb-16">
                    <span className="text-xs tracking-[0.4em] uppercase text-[#4a403a]/50 font-medium">
                        Join Us
                    </span>
                    <div className="w-12 h-[1px] bg-[#4a403a]/20 mt-4" />
                </div>

                <div className="max-w-3xl mx-auto text-center">
                    <p className="scroll-reveal text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a]/15 mb-0">
                        ¿Sos creativo?
                    </p>
                    <p className="scroll-reveal font-[family-name:var(--font-great-vibes)] font-normal tracking-normal text-8xl md:text-9xl text-[#4a403a] leading-none -mt-2 md:-mt-4">
                        Sumate
                    </p>
                    <p className="scroll-reveal text-xl md:text-2xl font-bold tracking-tight text-[#1a1a1a]/20 -mt-2 md:-mt-4">
                        a nuestro equipo
                    </p>

                    <p className="scroll-reveal text-lg text-[#4a403a]/70 leading-relaxed font-light max-w-xl mx-auto mt-8">
                        Buscamos personas apasionadas por la creatividad, el diseño y el marketing digital.
                        Envianos tu portfolio y contanos sobre vos.
                    </p>

                    {/* CTA */}
                    <div className="scroll-reveal mt-10">
                        <Link
                            href="mailto:camilamboglia.studio@gmail.com?subject=Portfolio%20-%20Quiero%20sumarme%20al%20equipo"
                            className="group relative inline-flex items-center gap-4 px-10 py-5 border border-[#4a403a]/20 hover:border-[#4a403a]/40 bg-white/60 hover:bg-white transition-all duration-500 rounded-full"
                        >
                            <Upload className="h-5 w-5 text-[#4a403a] group-hover:scale-110 transition-transform duration-300" />
                            <div className="text-left">
                                <span className="block text-xs tracking-[0.25em] uppercase font-semibold text-[#1a1a1a]">
                                    Enviá tu Portfolio
                                </span>
                                <span className="block text-[10px] tracking-[0.1em] text-[#4a403a]/50 mt-1">
                                    camilamboglia.studio@gmail.com
                                </span>
                            </div>
                            <span className="inline-block text-[#4a403a] transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}