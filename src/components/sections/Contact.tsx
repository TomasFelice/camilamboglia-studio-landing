"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Handle form submission here - for now just prevent default
        alert("Gracias por tu mensaje. Nos pondremos en contacto pronto.");
    }

    return (
        <section id="contact" className="w-full py-12 md:py-24 bg-[#F5F5F0]">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                            Hablemos de tu próximo proyecto
                        </h2>
                        <p className="max-w-[600px] text-zinc-800 md:text-xl/relaxed dark:text-gray-400">
                            ¿Listo para llevar tu marca al siguiente nivel? Déjanos tus datos y te contactaremos para agendar una reunión.
                        </p>

                        <div className="space-y-4">
                            <h3 className="font-bold text-lg text-primary">Contacto Directo</h3>
                            <p className="text-zinc-600">info@camilambogliastudio.com</p>
                            {/* Add social links here if needed */}
                        </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-zinc-100">
                        <form onSubmit={onSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Input id="name" placeholder="Nombre Completo" required className="bg-white border-zinc-200" />
                            </div>
                            <div className="space-y-2">
                                <Input id="email" type="email" placeholder="Correo Electrónico" required className="bg-white border-zinc-200" />
                            </div>
                            <div className="space-y-2">
                                <Input id="company" placeholder="Nombre de la Empresa/Marca" className="bg-white border-zinc-200" />
                            </div>
                            <div className="space-y-2">
                                <Textarea id="message" placeholder="Mensaje Breve" required className="min-h-[120px] bg-white border-zinc-200" />
                            </div>
                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 text-base">
                                Enviar Mensaje
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
