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
                <p className="scroll-reveal text-xs tracking-[0.4em] uppercase text-[#4a403a] mb-8 font-medium bg-white/80 px-5 py-1.5 backdrop-blur-sm rounded-full">
                    Branding & Digital Experiences
                </p>

                {/* Main headline */}
                <h1 className="scroll-reveal font-bold tracking-tighter text-white drop-shadow-lg mb-6">
                    {/* Line 1: AMPLIFICAMOS TU */}
                    <span className="flex items-baseline justify-center gap-3">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none">AMPLIFICAMOS</span>
                        <span className="text-white/30 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold leading-none">TU</span>
                    </span>
                    {/* Line 2: Impacto — overlaps slightly with line above */}
                    <span className="block font-[family-name:var(--font-great-vibes)] font-normal tracking-normal text-7xl sm:text-8xl md:text-9xl lg:text-[9rem] xl:text-[11rem] leading-none -mt-2 md:-mt-4">
                        Impacto
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="scroll-reveal max-w-xl text-base md:text-lg text-white/70 leading-relaxed mb-12 font-light drop-shadow-md">
                    Transformamos ideas en experiencias visuales y digitales que hacen crecer tu marca con proyección internacional.
                </p>

                {/* CTA */}
                <Link
                    href="#contact"
                    className="scroll-reveal group relative inline-flex items-center gap-3 px-10 py-4 text-xs tracking-[0.25em] uppercase font-semibold text-white bg-[#1a1a1a]/80 hover:bg-[#1a1a1a] backdrop-blur-sm rounded-full transition-all duration-500"
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
