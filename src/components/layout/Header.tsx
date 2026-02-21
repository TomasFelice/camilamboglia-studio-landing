"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Proyectos", href: "#projects" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <>
            <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#4a403a]/10">
                <div className="container mx-auto flex h-20 items-center justify-between px-6 md:px-10">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#1a1a1a]">
                            Cami Lamboglia Studio
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-xs font-medium tracking-[0.15em] uppercase text-[#4a403a]/70 hover:text-[#7b0e0e] transition-colors duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-[#4a403a] hover:text-[#7b0e0e] transition-colors z-50 relative"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-white z-40">
                    <nav className="flex flex-col items-center justify-center h-full gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-2xl font-light tracking-[0.2em] uppercase text-[#4a403a] hover:text-[#7b0e0e] transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
}
