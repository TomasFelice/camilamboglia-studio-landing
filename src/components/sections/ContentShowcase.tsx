"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play, ImageIcon, Layers } from "lucide-react";

const contentItems = [
    {
        type: "Reel",
        label: "Social Media",
        icon: "play",
        tall: true,
        from: "#e8e0d4",
        to: "#f0ebe3",
    },
    {
        type: "Post",
        label: "Branding",
        icon: "image",
        tall: false,
        from: "#ede8df",
        to: "#e4ddd3",
    },
    {
        type: "Post",
        label: "Product",
        icon: "image",
        tall: false,
        from: "#e6e1d8",
        to: "#ede8e0",
    },
    {
        type: "Historia",
        label: "Stories",
        icon: "play",
        tall: true,
        from: "#dfd9cf",
        to: "#e8e2d8",
    },
    {
        type: "Carrusel",
        label: "Content",
        icon: "layers",
        tall: false,
        from: "#ebe6dd",
        to: "#dfd9cf",
    },
    {
        type: "Post",
        label: "Diseño",
        icon: "image",
        tall: false,
        from: "#e4dfd6",
        to: "#eae5dc",
    },
];

function ContentIcon({ type }: { type: string }) {
    if (type === "play") return <Play className="h-5 w-5 fill-current" />;
    if (type === "layers") return <Layers className="h-5 w-5" />;
    return <ImageIcon className="h-5 w-5" />;
}

export default function ContentShowcase() {
    const sectionRef = useScrollReveal<HTMLElement>();

    return (
        <section
            id="content"
            ref={sectionRef}
            className="w-full py-24 md:py-36 bg-[#f5f4f0] overflow-hidden"
        >
            <div className="container px-6 md:px-10 mx-auto">
                {/* Section label */}
                <div className="scroll-reveal mb-16">
                    <span className="text-xs tracking-[0.4em] uppercase text-[#4a403a]/50 font-medium">
                        Contenido
                    </span>
                    <div className="w-12 h-[1px] bg-[#4a403a]/20 mt-4" />
                </div>

                {/* Heading */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                    <div>
                        <p className="scroll-reveal text-2xl md:text-3xl font-bold tracking-tight text-[#1a1a1a]/15">
                            Lo que
                        </p>
                        <h2 className="scroll-reveal font-[family-name:var(--font-great-vibes)] font-normal tracking-normal text-8xl md:text-9xl text-[#4a403a] leading-none -mt-8 md:-mt-12">
                            creamos
                        </h2>
                    </div>
                    <p className="scroll-reveal text-base text-[#4a403a]/50 font-light max-w-sm md:mb-4 md:shrink-0">
                        Reels, historias, posts y carruseles que conectan con audiencias reales y posicionan tu marca.
                    </p>
                </div>

                {/*
                    Mobile (3 cols): uniform square grid — 2 rows of 3 items, all same size.
                    Desktop (4 cols): tall items span 2 rows for dynamic masonry layout.
                    Order: [Reel(tall)] [Post] [Post] [Historia(tall)] [Carrusel] [Post]
                    Desktop result:
                      Col1      Col2    Col3    Col4
                      [Reel  ] [Post ] [Post ] [Historia]
                      [Reel  ] [Carr ] [Post ] [Historia]
                */}
                <div className="stagger-children grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-[210px]">
                    {contentItems.map((item, index) => (
                        <div
                            key={index}
                            className={`scroll-reveal group relative overflow-hidden cursor-default rounded-2xl md:rounded-3xl
                                aspect-square md:aspect-auto
                                ${item.tall ? "md:row-span-2" : ""}
                            `}
                            style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }}
                        >
                            {/* Content type badge */}
                            <div className="absolute top-2 left-2 md:top-3 md:left-3 z-10">
                                <span className="text-[8px] md:text-[9px] tracking-[0.15em] md:tracking-[0.2em] uppercase font-semibold bg-white/70 backdrop-blur-sm text-[#4a403a] px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                                    {item.type}
                                </span>
                            </div>

                            {/* Icon — visible on hover (desktop) or always subtle on mobile */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center text-[#4a403a]/50 md:opacity-0 md:group-hover:opacity-100 md:group-hover:bg-white/70 transition-all duration-300">
                                    <ContentIcon type={item.icon} />
                                </div>
                            </div>

                            {/* Subtle texture */}
                            <div
                                className="absolute inset-0 opacity-[0.04]"
                                style={{
                                    backgroundImage: "repeating-linear-gradient(0deg, #4a403a 0px, #4a403a 1px, transparent 1px, transparent 24px)"
                                }}
                            />

                            {/* Bottom label */}
                            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4">
                                <span className="text-[8px] md:text-[9px] tracking-[0.15em] md:tracking-[0.2em] uppercase font-medium text-[#4a403a]/50">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}