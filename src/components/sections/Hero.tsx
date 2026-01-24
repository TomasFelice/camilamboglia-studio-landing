import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="flex flex-col justify-center space-y-6">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                            Tu Partner Estratégico en Marketing Digital y Creatividad
                        </h1>
                        <p className="max-w-[600px] text-zinc-800 md:text-xl font-normal text-foreground/80 leading-relaxed">
                            Ayudamos a marcas a ordenar, profesionalizar y potenciar su presencia digital con estrategias integrales y contenido de impacto.
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold text-base px-8 py-6 h-auto">
                                <Link href="#contact">Descubre cómo podemos ayudarte</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none aspect-[4/5] lg:aspect-square overflow-hidden rounded-xl bg-secondary/50">
                        {/* Placeholder for the hero image to be generated/inserted */}
                        <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center text-neutral-400">
                            <Image
                                src="/hero_image.webp"
                                alt="Modern Workspace"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
