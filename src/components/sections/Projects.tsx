"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Projects() {
    const sectionRef = useScrollReveal<HTMLElement>();

    const projects = [
        {
            title: "Brand Identity",
            category: "Branding",
            gradient: "from-[#7b0e0e]/20 to-[#4a403a]/30",
        },
        {
            title: "Social Campaign",
            category: "Social Media",
            gradient: "from-[#4a403a]/25 to-[#e4e2dd]",
        },
        {
            title: "Product Launch",
            category: "Paid Media",
            gradient: "from-[#7b0e0e]/15 to-[#e4e2dd]",
        },
        {
            title: "Visual Content",
            category: "Product Content",
            gradient: "from-[#4a403a]/20 to-[#f5f4f0]",
        },
        {
            title: "Email Strategy",
            category: "Email Marketing",
            gradient: "from-[#7b0e0e]/10 to-[#4a403a]/15",
        },
        {
            title: "Digital Experience",
            category: "Branding",
            gradient: "from-[#4a403a]/15 to-[#7b0e0e]/10",
        },
    ];

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="w-full py-24 md:py-36 bg-white"
        >
            <div className="container px-6 md:px-10 mx-auto">
                {/* Section label */}
                <div className="scroll-reveal flex items-end justify-between mb-16">
                    <div>
                        <span className="text-xs tracking-[0.4em] uppercase text-[#7b0e0e] font-medium">
                            Recent Works
                        </span>
                        <div className="w-12 h-[1px] bg-[#7b0e0e]/30 mt-4" />
                    </div>
                </div>

                {/* Heading */}
                <h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1a1a1a] leading-[1.1] mb-20 max-w-3xl">
                    Proyectos que
                    <span className="text-[#4a403a]/25"> inspiran resultados</span>
                </h2>

                {/* Projects grid */}
                <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="scroll-reveal group relative aspect-[4/3] overflow-hidden cursor-pointer"
                        >
                            {/* Gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-110`} />

                            {/* Grayish overlay for text readability */}
                            <div className="absolute inset-0 bg-[#4a403a]/30" />

                            {/* Grid pattern overlay */}
                            <div
                                className="absolute inset-0 opacity-[0.06]"
                                style={{
                                    backgroundImage: "linear-gradient(rgba(74,64,58,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,64,58,0.3) 1px, transparent 1px)",
                                    backgroundSize: "30px 30px"
                                }}
                            />

                            {/* Content overlay on hover */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-[10px] tracking-[0.3em] uppercase text-[#7b0e0e] mb-2 font-medium">
                                    {project.category}
                                </span>
                                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Always visible label */}
                            <div className="absolute top-6 left-6 md:top-8 md:left-8 group-hover:opacity-0 transition-opacity duration-500">
                                <span className="text-xs tracking-[0.2em] uppercase text-white/70 font-medium">
                                    {project.category}
                                </span>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute bottom-0 right-0 w-12 h-12 border-l border-t border-white/10 group-hover:border-[#7b0e0e]/40 transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
