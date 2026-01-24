import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Talent() {
    return (
        <section id="talent" className="w-full py-16 md:py-32 bg-background border-y border-zinc-100">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                        ¿Eres creativo? Únete a nuestro equipo
                    </h2>
                    <p className="text-zinc-800 md:text-xl/relaxed dark:text-gray-400">
                        Siempre estamos buscando talento apasionado por el marketing, el diseño y la comunicación. Si tienes un portafolio increíble, ¡queremos verlo!
                    </p>
                    <div className="pt-4">
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                            <Link href="mailto:rrhh@camilambogliastudio.com">
                                Envía tu Portfolio
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
