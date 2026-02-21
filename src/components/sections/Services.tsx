"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
    Palette,
    Share2,
    Target,
    Camera,
    Mail,
} from "lucide-react";

export default function Services() {
    const sectionRef = useScrollReveal<HTMLElement>();

    const services = [
        {
            title: "Branding",
            description: "Identidad visual que define y posiciona tu marca en el mercado.",
            icon: <Palette className="h-6 w-6" />,
        },
        {
            title: "Social Media",
            description: "Gestión estratégica de redes para conectar con tu audiencia.",
            icon: <Share2 className="h-6 w-6" />,
        },
        {
            title: "Paid Media",
            description: "Campañas publicitarias optimizadas para maximizar resultados.",
            icon: <Target className="h-6 w-6" />,
        },
        {
            title: "Product Content",
            description: "Contenido visual premium que eleva la percepción de tu producto.",
            icon: <Camera className="h-6 w-6" />,
        },
        {
            title: "Email Marketing",
            description: "Comunicación directa y efectiva con tu base de clientes.",
            icon: <Mail className="h-6 w-6" />,
        },
    ];

    return (
        <section
            id="services"
            ref={sectionRef}
            className="w-full py-24 md:py-36 bg-[#f5f4f0]"
        >
            <div className="container px-6 md:px-10 mx-auto">
                {/* Section label */}
                <div className="scroll-reveal mb-16">
                    <span className="text-xs tracking-[0.4em] uppercase text-[#7b0e0e] font-medium">
                        Our Services
                    </span>
                    <div className="w-12 h-[1px] bg-[#7b0e0e]/30 mt-4" />
                </div>

                {/* Heading */}
                <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a1a] leading-[1.1] mb-20 max-w-3xl">
                    Potenciamos marcas con ideas creativas y
                    <span className="text-[#4a403a]/25"> estrategias efectivas</span>
                </h2>

                {/* Services grid */}
                <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-[#4a403a]/10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="scroll-reveal group border-b border-r border-[#4a403a]/10 p-8 md:p-10 hover:bg-white/60 transition-all duration-500 cursor-default"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="text-[#7b0e0e] group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <span className="text-xs tracking-[0.2em] uppercase text-[#4a403a]/30 font-medium">
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
