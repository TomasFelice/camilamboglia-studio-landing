"use client";

import React from "react";
import ContactCTA from "@/components/ui/ContactCTA";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";

function FolderDecor({ className, svgClassName, children }: { className?: string; svgClassName?: string; children?: React.ReactNode }) {
    return (
        <div className={`relative inline-block ${className ?? ""}`}>
            <svg viewBox="0 0 240 192" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-full h-full ${svgClassName ?? ""}`}>
                <ellipse cx="120" cy="188" rx="96" ry="6" fill="#a07840" opacity="0.18" />
                <path d="M14 68 Q14 52 26 52 H84 Q97 52 101 66 L101 68 Z" fill="#c09058" />
                <rect x="14" y="66" width="212" height="118" rx="14" fill="#c09058" />
                <rect x="14" y="64" width="212" height="20" rx="5" fill="white" opacity="0.90" />
                <rect x="14" y="80" width="212" height="104" rx="14" fill="#d8b87a" />
                <rect x="14" y="80" width="212" height="32" rx="14" fill="white" opacity="0.06" />
            </svg>
            {children && (
                <div className="absolute inset-0 flex items-center justify-center pt-[28%] text-[#4a403a]">
                    {children}
                </div>
            )}
        </div>
    );
}

const integralBlocks = [
    {
        title: "Estrategia y marca",
        items: [
            "Definición de posicionamiento y propuesta de valor.",
            "Estrategia integral de marketing y comunicación.",
            "Gestión de comunidad y acciones de engagement.",
            "Reporte mensual de resultados.",
        ],
    },
    {
        title: "Producción y edición de contenido",
        items: [
            "1 producción mensual presencial.",
        ],
    },
    {
        title: "Gestión de redes",
        items: [
            "Instagram: 8 posts mensuales.",
            "Historias diarias (2 a 3 de lunes a sábado, 1 los domingos).",
        ],
    },
    {
        title: "Campañas publicitarias",
        items: [
            "Creación y gestión de 2 campañas Meta Ads (alcance, reconocimiento, tráfico).",
            "El presupuesto de pauta no está incluido, lo aporta el cliente.",
        ],
        italic: true,
    },
];

const plans = [
    {
        name: "EMPRENDER",
        subtitle: "Community Manager · Project Manager · Edición de contenido",
        items: [
            "Estrategia digital y planificación mensual.",
            "Gestión integral de Instagram.",
            "Publicación de contenidos.",
            "Edición de material enviado por el cliente.",
            "Redacción de copys y diseño visual.",
            "4 posteos mensuales al feed (reel / post).",
            "3 días de historias semanales.",
            "Reporte mensual de resultados.",
        ],
    },
    {
        name: "BASIC",
        subtitle: "Community Manager · Project Manager · Creación de contenido",
        items: [
            "Estrategia digital y planificación mensual.",
            "Gestión integral de Instagram.",
            "Publicación de contenidos.",
            "1 producción de contenido al mes.",
            "Redacción de copys y diseño visual.",
            "4 posteos mensuales al feed (reel / post).",
            "3 días de historias semanales.",
            "Reporte mensual de resultados.",
        ],
    },
    {
        name: "PRO",
        subtitle: "Community Manager · Project Manager · Creación de contenido",
        items: [
            "Estrategia digital y planificación mensual.",
            "Gestión integral de Instagram.",
            "Publicación de contenidos.",
            "1 producción presencial mensual.",
            "Edición de todo el material.",
            "Redacción de copys y diseño visual.",
            "8 posteos mensuales al feed.",
            "Historias diarias (lunes a sábado 2x día, domingos 1).",
            "Reporte mensual de resultados.",
        ],
    },
];

export default function Plans() {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section
            id="plans"
            ref={sectionRef}
            className="w-full py-24 md:py-36 bg-white overflow-hidden"
        >
            <div className="container px-6 md:px-10 mx-auto">
                {/* Section label */}
                <div className="scroll-reveal mb-12">
                    <span className="text-xs tracking-[0.4em] uppercase text-[#4a403a]/50 font-medium">
                        Nuestros Planes
                    </span>
                    <div className="w-12 h-[1px] bg-[#4a403a]/20 mt-4" />
                </div>

                {/* Heading */}
                <div className="relative mb-20">
                    <div className="absolute -right-4 md:right-4 lg:right-10 top-1/2 -translate-y-1/2 w-56 md:w-80 lg:w-96 opacity-30 pointer-events-none select-none">
                        <FolderDecor className="w-full" />
                    </div>
                    <div className="relative max-w-2xl">
                        <h2 className="scroll-reveal text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-[1.1] mb-0">
                            Elegí el plan que
                        </h2>
                        <p className="scroll-reveal font-[family-name:var(--font-great-vibes)] font-normal tracking-normal text-7xl md:text-8xl lg:text-[7rem] text-[#4a403a]/70 leading-none -mt-3 md:-mt-5">
                            potencie tu marca
                        </p>
                        <p className="scroll-reveal text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a]/15 -mt-2 md:-mt-4">
                            y acompañe tu crecimiento
                        </p>
                    </div>
                </div>

                {/* INTEGRAL featured */}
                <div className="scroll-reveal mb-20">
                    <div className="rounded-3xl overflow-hidden border border-[#4a403a]/15 bg-[#f5f4f0]">
                        {/* Header */}
                        <div className="bg-[#4a403a] px-8 md:px-12 py-8 flex flex-col md:flex-row md:items-end gap-3">
                            <div>
                                <p className="text-xs tracking-[0.35em] uppercase text-white/50 font-medium mb-2">
                                    Servicio completo
                                </p>
                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-none">
                                    INTEGRAL
                                </h3>
                            </div>
                            <p className="text-sm text-white/60 font-light md:ml-8 md:mb-1 leading-relaxed max-w-md">
                                Para que tu marca deje de improvisar y empiece a comunicar con intención.
                            </p>
                        </div>

                        {/* Blocks grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#4a403a]/10">
                            {integralBlocks.map((block, i) => (
                                <div key={i} className="bg-[#f5f4f0] p-7 md:p-9">
                                    <h4 className="text-xs tracking-[0.3em] uppercase font-semibold text-[#4a403a] mb-4">
                                        {block.title}
                                    </h4>
                                    <ul className="space-y-2">
                                        {block.items.map((item, j) => (
                                            <li
                                                key={j}
                                                className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                                                    block.italic && j === block.items.length - 1
                                                        ? "text-[#4a403a]/40 italic"
                                                        : "text-[#4a403a]/70"
                                                }`}
                                            >
                                                {!(block.italic && j === block.items.length - 1) && (
                                                    <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#4a403a]/40" />
                                                )}
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Subhead */}
                <div className="scroll-reveal mb-10">
                    <span className="text-xs tracking-[0.4em] uppercase text-[#4a403a]/40 font-medium">
                        Otros planes a medida
                    </span>
                    <div className="w-12 h-[1px] bg-[#4a403a]/15 mt-4" />
                </div>

                {/* 3 plans grid */}
                <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-5">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className="scroll-reveal flex flex-col rounded-3xl overflow-hidden border border-[#4a403a]/15 bg-white hover:shadow-lg transition-all duration-500"
                        >
                            {/* Plan header */}
                            <div className="bg-[#4a403a] px-7 py-6">
                                <h3 className="text-xl font-bold text-white tracking-tight leading-tight mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-[10px] tracking-[0.15em] uppercase text-white/50 leading-relaxed">
                                    {plan.subtitle}
                                </p>
                            </div>

                            {/* Features */}
                            <ul className="flex-1 p-7 space-y-3">
                                {plan.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-2.5 text-sm text-[#4a403a]/65 leading-relaxed font-light">
                                        <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-[#4a403a]/35" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <ContactCTA />
            </div>
        </section>
    );
}
