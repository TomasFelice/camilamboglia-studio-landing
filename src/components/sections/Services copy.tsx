"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
    Palette,
    Users,
    Target,
    Camera,
    Clapperboard,
    Globe,
} from "lucide-react";

function FolderDecor({ className, children }: { className?: string; children?: React.ReactNode }) {
    return (
        <div className={`relative inline-block ${className ?? ""}`}>
            <svg viewBox="0 0 240 192" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Soft ambient shadow */}
                <ellipse cx="120" cy="188" rx="96" ry="6" fill="#a07840" opacity="0.18" />

                {/* Tab flap (top-left, darker) */}
                <path d="M14 68 Q14 52 26 52 H84 Q97 52 101 66 L101 68 Z" fill="#c09058" />

                {/* Folder back body */}
                <rect x="14" y="66" width="212" height="118" rx="14" fill="#c09058" />

                {/* White paper strip peeking out */}
                <rect x="14" y="64" width="212" height="20" rx="5" fill="white" opacity="0.90" />

                {/* Folder front face (lighter, main visible area) */}
                <rect x="14" y="80" width="212" height="104" rx="14" fill="#d8b87a" />

                {/* Subtle top highlight on front face */}
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

export default function Services() {
    const sectionRef = useScrollReveal<HTMLElement>();

    const services = [
        {
            title: "Branding",
            description: "Identidad visual que define y posiciona tu marca en el mercado.",
            icon: <Palette className="h-5 w-5" />,
        },
        {
            title: "Community Management",
            description: "Gestión estratégica de redes para conectar con tu audiencia.",
            icon: <Users className="h-5 w-5" />,
        },
        {
            title: "Paid Media",
            description: "Campañas publicitarias optimizadas para maximizar resultados.",
            icon: <Target className="h-5 w-5" />,
        },
        {
            title: "Product Content",
            description: "Contenido visual premium que eleva la percepción de tu producto.",
            icon: <Camera className="h-5 w-5" />,
        },
        {
            title: "Content Wedding Creator",
            description: "Cobertura creativa de bodas con enfoque editorial y storytelling.",
            icon: <Clapperboard className="h-5 w-5" />,
        },
        {
            title: "Web Pages",
            description: "Diseño y desarrollo de sitios web modernos que convierten visitas en clientes.",
            icon: <Globe className="h-5 w-5" />,
        },
    ];

    return (
        <section
            id="services"
            ref={sectionRef}
            className="w-full py-24 md:py-36 bg-[#f5f4f0] overflow-hidden"
        >
            <div className="container px-6 md:px-10 mx-auto">
                {/* Section label */}
                <div className="scroll-reveal mb-12">
                    <span className="text-xs tracking-[0.4em] uppercase text-[#4a403a]/50 font-medium">
                        Our Services
                    </span>
                    <div className="w-12 h-[1px] bg-[#4a403a]/20 mt-4" />
                </div>

                {/* Heading with folder decoration */}
                <div className="relative mb-20">
                    {/* Decorative folder */}
                    <div className="absolute -right-4 md:right-4 lg:right-10 top-1/2 -translate-y-1/2 w-56 md:w-80 lg:w-96 opacity-40 pointer-events-none select-none">
                        <FolderDecor className="w-full" />
                    </div>

                    <div className="relative max-w-2xl">
                        <h2 className="scroll-reveal text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] leading-[1.1] mb-0">
                            Potenciamos marcas con
                        </h2>
                        <p className="scroll-reveal font-[family-name:var(--font-great-vibes)] font-normal tracking-normal text-7xl md:text-8xl lg:text-[7rem] text-[#4a403a]/70 leading-none -mt-3 md:-mt-5">
                            ideas creativas
                        </p>
                        <p className="scroll-reveal text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a]/15 -mt-2 md:-mt-4">
                            y estrategias efectivas
                        </p>
                    </div>
                </div>

                {/* Services grid — soft cards */}
                <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="scroll-reveal group bg-white rounded-3xl p-8 md:p-10 hover:shadow-lg transition-all duration-500 cursor-default"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-11 h-11 rounded-2xl bg-[#f5f4f0] flex items-center justify-center text-[#4a403a] group-hover:bg-[#4a403a] group-hover:text-white transition-all duration-500">
                                    {service.icon}
                                </div>
                                <span className="text-xs tracking-[0.2em] uppercase text-[#4a403a]/20 font-medium pt-1">
                                    0{index + 1}
                                </span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-3 tracking-tight">
                                {service.title}
                            </h3>
                            <p className="text-sm text-[#4a403a]/60 leading-relaxed font-light">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
