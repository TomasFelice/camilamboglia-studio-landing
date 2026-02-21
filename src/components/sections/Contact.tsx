"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const sectionRef = useScrollReveal<HTMLElement>();
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        phone: "",
        business: "",
        industry: "",
        needs: "",
    });

    const isFormComplete = Object.values(formValues).every((v) => v.trim() !== "");

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        const formData = new FormData(event.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            business: formData.get("business"),
            industry: formData.get("industry"),
            needs: formData.get("needs"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.error || "Error al enviar el mensaje.");
            }

            setStatus("success");
            (event.target as HTMLFormElement).reset();
        } catch (err) {
            setStatus("error");
            setErrorMsg(
                err instanceof Error ? err.message : "Error al enviar el mensaje."
            );
        }
    }

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="w-full py-24 md:py-36 bg-[#e4e2dd]"
        >
            <div className="container px-6 md:px-10 mx-auto">
                {/* Section label */}
                <div className="scroll-reveal mb-16">
                    <span className="text-xs tracking-[0.4em] uppercase text-[#7b0e0e] font-medium">
                        Contact
                    </span>
                    <div className="w-12 h-[1px] bg-[#7b0e0e]/30 mt-4" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left: Info */}
                    <div className="space-y-10">
                        <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a1a] leading-[1.1]">
                            ¿Listo para amplificar
                            <span className="text-[#4a403a]/25"> tu impacto?</span>
                        </h2>

                        <p className="scroll-reveal text-lg text-[#4a403a]/70 leading-relaxed font-light max-w-md">
                            Dejanos tus datos y te contactaremos para agendar una reunión estratégica.
                        </p>

                        {/* Contact details */}
                        <div className="scroll-reveal space-y-6 pt-4">
                            <div>
                                <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a403a]/40 block mb-2">Email</span>
                                <a href="mailto:camilamboglia.studio@gmail.com" className="text-[#1a1a1a]/70 hover:text-[#7b0e0e] transition-colors duration-300 font-light">
                                    camilamboglia.studio@gmail.com
                                </a>
                            </div>
                            {/* <div>
                                <span className="text-[10px] tracking-[0.3em] uppercase text-[#4a403a]/40 block mb-2">WhatsApp</span>
                                <a href="https://wa.link/camilamboglia" className="text-[#1a1a1a]/70 hover:text-[#7b0e0e] transition-colors duration-300 font-light">
                                    Enviar mensaje
                                </a>
                            </div> */}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="scroll-reveal">
                        <form onSubmit={onSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input
                                    id="name"
                                    name="name"
                                    placeholder="Nombre Completo"
                                    required
                                    disabled={status === "loading"}
                                    onChange={handleChange}
                                    className="w-full bg-white/60 border border-[#4a403a]/15 text-[#1a1a1a] placeholder:text-[#4a403a]/40 px-5 py-4 text-sm font-light focus:border-[#7b0e0e]/50 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                                />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    required
                                    disabled={status === "loading"}
                                    onChange={handleChange}
                                    className="w-full bg-white/60 border border-[#4a403a]/15 text-[#1a1a1a] placeholder:text-[#4a403a]/40 px-5 py-4 text-sm font-light focus:border-[#7b0e0e]/50 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                                />
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="Número de Contacto"
                                    required
                                    disabled={status === "loading"}
                                    onChange={handleChange}
                                    className="w-full bg-white/60 border border-[#4a403a]/15 text-[#1a1a1a] placeholder:text-[#4a403a]/40 px-5 py-4 text-sm font-light focus:border-[#7b0e0e]/50 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                                />
                                <input
                                    id="business"
                                    name="business"
                                    placeholder="Negocio / Marca"
                                    required
                                    disabled={status === "loading"}
                                    onChange={handleChange}
                                    className="w-full bg-white/60 border border-[#4a403a]/15 text-[#1a1a1a] placeholder:text-[#4a403a]/40 px-5 py-4 text-sm font-light focus:border-[#7b0e0e]/50 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                                />
                            </div>
                            <input
                                id="industry"
                                name="industry"
                                placeholder="Rubro / Industria"
                                required
                                disabled={status === "loading"}
                                onChange={handleChange}
                                className="w-full bg-white/60 border border-[#4a403a]/15 text-[#1a1a1a] placeholder:text-[#4a403a]/40 px-5 py-4 text-sm font-light focus:border-[#7b0e0e]/50 focus:outline-none transition-colors duration-300 disabled:opacity-50"
                            />
                            <textarea
                                id="needs"
                                name="needs"
                                placeholder="¿Qué necesitás hoy en tus redes?"
                                required
                                rows={4}
                                disabled={status === "loading"}
                                onChange={handleChange}
                                className="w-full bg-white/60 border border-[#4a403a]/15 text-[#1a1a1a] placeholder:text-[#4a403a]/40 px-5 py-4 text-sm font-light focus:border-[#7b0e0e]/50 focus:outline-none transition-colors duration-300 resize-none disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className={`w-full bg-[#7b0e0e] hover:bg-[#8f1414] text-white font-semibold py-4 text-xs tracking-[0.25em] uppercase transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed ${isFormComplete && status !== "loading" ? "hover:cursor-pointer" : "cursor-default"}`}
                            >
                                {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                            </button>

                            {/* Success message */}
                            {status === "success" && (
                                <div className="text-center py-3 px-4 bg-green-50 border border-green-200 text-green-800 text-sm font-light animate-in fade-in duration-300">
                                    ¡Mensaje enviado! Nos pondremos en contacto pronto.
                                </div>
                            )}

                            {/* Error message */}
                            {status === "error" && (
                                <div className="text-center py-3 px-4 bg-red-50 border border-red-200 text-red-700 text-sm font-light animate-in fade-in duration-300">
                                    {errorMsg || "Ocurrió un error. Por favor intentá de nuevo."}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
