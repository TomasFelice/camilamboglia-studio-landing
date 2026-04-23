"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const metrics = [
    {
        value: "2.460",
        label: "conversaciones generadas",
        context: "en un mes vía Meta Ads",
        sub: "Mensajes iniciados por leads reales",
    },
    {
        value: "+12.000",
        label: "visitas al perfil",
        context: "campañas de tráfico en Instagram",
        sub: "Alcance orgánico y pago combinado",
    },
    {
        value: "$15",
        label: "costo por visita",
        context: "al perfil de Instagram",
        sub: "Mejor resultado de campaña logrado",
    },
    {
        value: "$323",
        label: "costo por lead",
        context: "conversación iniciada",
        sub: "Campaña de mensajes optimizada",
    },
];

export default function Results() {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section
            id="results"
            ref={sectionRef}
            className="w-full py-24 md:py-36 bg-white"
        >
            <div className="container px-6 md:px-10 mx-auto">
                {/* Section label */}
                <div className="scroll-reveal mb-16">
                    <span className="text-xs tracking-[0.4em] uppercase text-[#4a403a]/50 font-medium">
                        Resultados
                    </span>
                    <div className="w-12 h-[1px] bg-[#4a403a]/20 mt-4" />
                </div>

                {/* Heading */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                    <div>
                        <h2 className="scroll-reveal text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-[1.1] mb-0">
                            Números que
                        </h2>
                        <p className="scroll-reveal font-[family-name:var(--font-great-vibes)] font-normal tracking-normal text-8xl md:text-9xl text-[#4a403a]/70 leading-none -mt-3 md:-mt-5">
                            hablan solos
                        </p>
                    </div>
                    <p className="scroll-reveal text-base text-[#4a403a]/50 font-light max-w-sm md:mb-4 md:shrink-0">
                        Métricas reales de clientes activos. Gestionamos campañas que generan conversaciones, tráfico e impacto medible.
                    </p>
                </div>

                {/* Metrics grid */}
                <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="scroll-reveal group bg-[#f5f4f0] rounded-3xl p-8 md:p-9 flex flex-col gap-3 hover:bg-[#eee9e3] transition-all duration-500"
                        >
                            <div className="text-5xl md:text-6xl font-bold tracking-tight text-[#1a1a1a] leading-none">
                                {metric.value}
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-[#1a1a1a]/80 leading-snug">
                                    {metric.label}
                                </div>
                                <div className="text-xs text-[#4a403a]/50 font-light mt-0.5">
                                    {metric.context}
                                </div>
                            </div>
                            <div className="mt-auto pt-3 border-t border-[#4a403a]/10">
                                <span className="text-[10px] tracking-[0.1em] text-[#4a403a]/35 font-light">
                                    {metric.sub}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="scroll-reveal mt-8 text-xs text-[#4a403a]/30 font-light">
                    * Datos de campañas gestionadas para clientes activos. Los resultados pueden variar según industria y presupuesto.
                </p>
            </div>
        </section>
    );
}