"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
    const sectionRef = useScrollReveal<HTMLElement>();

    const marqueeText = "WORKING GLOBALLY • CREATIVIDAD • BRANDING • IMPACTO DIGITAL • SOCIAL MEDIA • EXPERIENCIAS • ";

    return (
        <section
            id="home"
            ref={sectionRef}
            className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
        >
            {/* Background image */}
            <Image
                src="/hero_image_2.webp"
                alt="Hero background"
                fill
                priority
                className="object-cover"
                quality={90}
            />

            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-[#4a403a]/50" />

            {/* Subtle grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }}
            />

            {/* Main content */}
            <div className="relative z-10 container px-6 md:px-10 mx-auto flex flex-col items-center text-center flex-1 justify-center">
                {/* Small label */}
                <p className="scroll-reveal text-xs tracking-[0.4em] uppercase text-[#7b0e0e] mb-8 font-medium bg-white/80 px-4 py-1.5 backdrop-blur-sm">
                    Branding & Digital Experiences
                </p>

                {/* Main headline */}
                <h1 className="scroll-reveal text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white leading-[0.9] mb-8 drop-shadow-lg">
                    AMPLIFICAMOS
                    <br />
                    <span className="text-white/40">TU IMPACTO</span>
                </h1>

                {/* Subtitle */}
                <p className="scroll-reveal max-w-xl text-base md:text-lg text-white/70 leading-relaxed mb-12 font-light drop-shadow-md">
                    Transformamos ideas en experiencias visuales y digitales que hacen crecer tu marca con proyección internacional.
                </p>

                {/* CTA */}
                <Link
                    href="#contact"
                    className="scroll-reveal group relative inline-flex items-center gap-3 px-10 py-4 text-xs tracking-[0.25em] uppercase font-semibold text-white bg-[#7b0e0e] hover:bg-[#8f1414] transition-all duration-500"
                >
                    Contactanos
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
            </div>

            {/* Marquee ticker at bottom */}
            <div className="relative z-10 w-full border-t border-white/10 py-5 mt-auto">
                <div className="marquee-container">
                    <div className="marquee-content">
                        {[...Array(3)].map((_, i) => (
                            <span
                                key={i}
                                className="text-sm md:text-base tracking-[0.3em] uppercase text-white/30 font-bold mx-4 whitespace-nowrap"
                            >
                                {marqueeText}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up-delay-3 z-10">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
            </div>
        </section>
    );
}
