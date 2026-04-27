"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function VideoCard({ src, className }: { src: string; className?: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) video.play().catch(() => {});
                else video.pause();
            },
            { threshold: 0.3 }
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={`scroll-reveal relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#e8e0d4] ${className ?? ""}`}>
            <span className="absolute top-2 left-2 md:top-3 md:left-3 z-10 text-[8px] md:text-[9px] tracking-[0.15em] uppercase font-semibold bg-white/70 backdrop-blur-sm text-[#4a403a] px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                Reel
            </span>
            <video
                ref={videoRef}
                src={src}
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
            />
        </div>
    );
}

function ImageCard({ src, alt, type, className }: {
    src: string; alt: string; type: string; className?: string;
}) {
    return (
        <div className={`scroll-reveal relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#e8e0d4] ${className ?? ""}`}>
            <span className="absolute top-2 left-2 md:top-3 md:left-3 z-10 text-[8px] md:text-[9px] tracking-[0.15em] uppercase font-semibold bg-white/70 backdrop-blur-sm text-[#4a403a] px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                {type}
            </span>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
            />
        </div>
    );
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
                    Mobile  (2 cols, items-start): pares de mismo aspect-ratio por fila → misma altura.
                      Fila 1: [Reel1 9:16]   [Historia1 9:16]
                      Fila 2: [Post1  4:5]   [Post2     4:5]
                      Fila 3: [Reel2 9:16]   [Historia2 9:16]

                    Desktop (4 cols, items-stretch, auto-rows 210px):
                      Col:   1          2         3         4
                      Row 1: Reel1      Post1     Post2     Historia1
                      Row 2: Reel1      Reel2     Hist2     Historia1
                      Row 3: (vacío)    Reel2     Hist2     (vacío)
                */}
                <div className="stagger-children grid grid-cols-2 gap-3 items-start md:items-stretch md:grid-cols-4 md:gap-4 md:auto-rows-[210px]">

                    {/* Reel 1 — móvil izq / desktop col 1 rows 1-2 */}
                    <VideoCard
                        src="/content/reel-1.mp4"
                        className="aspect-[9/16] md:aspect-auto md:col-start-1 md:row-start-1 md:row-span-2"
                    />

                    {/* Historia 1 — móvil der (par Reel1) / desktop col 4 rows 1-2 */}
                    <ImageCard
                        src="/content/historia-1.jpg"
                        alt="Historia de Instagram 1"
                        type="Historia"
                        className="aspect-[9/16] md:aspect-auto md:col-start-4 md:row-start-1 md:row-span-2"
                    />

                    {/* Post 1 — móvil izq (par Post2) / desktop col 2 row 1 */}
                    <ImageCard
                        src="/content/post-1.png"
                        alt="Post de Instagram 1"
                        type="Post"
                        className="aspect-[4/5] md:aspect-auto md:col-start-2 md:row-start-1"
                    />

                    {/* Post 2 — móvil der (par Post1) / desktop col 3 row 1 */}
                    <ImageCard
                        src="/content/post-2.png"
                        alt="Post de Instagram 2"
                        type="Post"
                        className="aspect-[4/5] md:aspect-auto md:col-start-3 md:row-start-1"
                    />

                    {/* Reel 2 — móvil izq (par Hist2) / desktop col 2 rows 2-3 */}
                    <VideoCard
                        src="/content/reel-2.mp4"
                        className="aspect-[9/16] md:aspect-auto md:col-start-2 md:row-start-2 md:row-span-2"
                    />

                    {/* Historia 2 — móvil der (par Reel2) / desktop col 3 rows 2-3 */}
                    <ImageCard
                        src="/content/historia-2.jpg"
                        alt="Historia de Instagram 2"
                        type="Historia"
                        className="aspect-[9/16] md:aspect-auto md:col-start-3 md:row-start-2 md:row-span-2"
                    />
                </div>
            </div>
        </section>
    );
}
