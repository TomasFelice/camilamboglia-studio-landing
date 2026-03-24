import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    const marqueeText = "AMPLIFY YOUR BRAND • WORKING GLOBALLY • CREATIVE EXCELLENCE • DIGITAL EXPERIENCES • ";

    return (
        <footer className="w-full bg-[#1a1a1a] border-t border-[#4a403a]/20">
            {/* Marquee band */}
            <div className="py-6 border-b border-white/5">
                <div className="marquee-container">
                    <div className="marquee-content">
                        {[...Array(4)].map((_, i) => (
                            <span
                                key={i}
                                className="text-3xl md:text-5xl font-bold tracking-tight text-white/20 uppercase mx-6 whitespace-nowrap"
                            >
                                {marqueeText}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer content */}
            <div className="container px-6 md:px-10 mx-auto py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    {/* Logo and tagline */}
                    <div className="space-y-4">
                        <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#e4e2dd]">
                            Cala Studio
                        </span>
                        <p className="text-xs text-[#e4e2dd]/40 font-light leading-relaxed max-w-xs">
                            Amplificamos el impacto de tu marca con estrategias creativas y proyección internacional.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#e4e2dd]/30 font-medium">
                            Navegación
                        </span>
                        <nav className="flex flex-col gap-3">
                            {[
                                { name: "Home", href: "#home" },
                                { name: "About", href: "#about" },
                                { name: "Servicios", href: "#services" },
                                // { name: "Proyectos", href: "#projects" },
                                { name: "Contacto", href: "#contact" },
                            ].map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-xs tracking-[0.1em] text-[#e4e2dd]/40 hover:text-[#7b0e0e] transition-colors duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Social & contact */}
                    <div className="space-y-4">
                        <span className="text-[10px] tracking-[0.3em] uppercase text-[#e4e2dd]/30 font-medium">
                            Seguinos
                        </span>
                        <div className="flex gap-5">
                            <Link
                                href="https://www.instagram.com/calastudio.mkt/"
                                target="_blank"
                                className="text-[#e4e2dd]/40 hover:text-[#7b0e0e] transition-colors duration-300"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>

                        <div className="pt-2">
                            <a
                                href="mailto:camilamboglia.studio@gmail.com"
                                className="text-xs text-[#e4e2dd]/40 hover:text-[#7b0e0e] transition-colors duration-300"
                            >
                                camilamboglia.studio@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[10px] tracking-[0.15em] text-[#e4e2dd]/25 uppercase">
                        © 2026 Cala Studio. All rights reserved.
                    </p>
                    <p className="text-[10px] tracking-[0.15em] text-[#e4e2dd]/25 uppercase">
                        Designed with purpose
                    </p>
                </div>
            </div>
        </footer>
    );
}
