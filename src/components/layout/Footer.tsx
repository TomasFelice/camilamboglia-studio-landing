import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full py-8 bg-background border-t border-zinc-100">
            <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold tracking-tight text-primary font-sans">
                        Cami Lamboglia Studio
                    </span>
                </div>

                <p className="text-xs text-zinc-500">
                    © 2024 Cami Lamboglia Studio. Todos los derechos reservados.
                </p>

                <div className="flex gap-4">
                    <Link href="#" className="text-zinc-500 hover:text-primary transition-colors">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-zinc-500 hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
