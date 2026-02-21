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
                    <span className="text-xs tracking-[0.4em] uppercase text-[#7b0e0e] font-medium">
                        Join Us
                    </span>
                    <div className="w-12 h-[1px] bg-[#7b0e0e]/30 mt-4" />
                </div>

                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a1a] leading-[1.1]">
                        ¿Sos creativo?
                        <span className="text-[#4a403a]/25"> Sumate a nuestro equipo</span>
                    </h2>

                    <p className="scroll-reveal text-lg text-[#4a403a]/70 leading-relaxed font-light max-w-xl mx-auto">
                        Buscamos personas apasionadas por la creatividad, el diseño y el marketing digital.
                        Envianos tu portfolio y contanos sobre vos.
                    </p>

                    {/* Upload / CTA area */}
                    <div className="scroll-reveal pt-4">
                        <Link
                            href="mailto:camilamboglia.studio@gmail.com?subject=Portfolio%20-%20Quiero%20sumarme%20al%20equipo"
                            className="group relative inline-flex items-center gap-4 px-10 py-5 border-2 border-[#4a403a]/15 hover:border-[#7b0e0e]/40 bg-white/60 hover:bg-white transition-all duration-500"
                        >
                            <Upload className="h-5 w-5 text-[#7b0e0e] group-hover:scale-110 transition-transform duration-300" />
                            <div className="text-left">
                                <span className="block text-xs tracking-[0.25em] uppercase font-semibold text-[#1a1a1a]">
                                    Enviá tu Portfolio
                                </span>
                                <span className="block text-[10px] tracking-[0.1em] text-[#4a403a]/50 mt-1">
                                    camilamboglia.studio@gmail.com
                                </span>
                            </div>
                            <span className="inline-block text-[#7b0e0e] transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
