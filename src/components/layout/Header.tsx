"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Servicios", href: "#services" },
        { name: "Casos de Éxito", href: "#success-stories" },
        { name: "Únete al Equipo", href: "#talent" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-[#FDFBF7]/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo Placeholder - Using Text for now as per instructions to incorporate logo later if image available */}
                    <span className="text-xl font-bold tracking-tight text-primary font-sans">
                        Cami Lamboglia Studio
                    </span>
                </Link>
                <nav className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="shrink-0">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#FDFBF7]">
                            <nav className="flex flex-col gap-6 mt-10">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
