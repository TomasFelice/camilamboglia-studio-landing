"use client";

export default function ContactCTA() {
    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="scroll-reveal mt-16 pt-10 border-t border-[#4a403a]/10 text-center">
            <a
                href="#contact"
                onClick={handleClick}
                className="group inline-flex items-center gap-3 px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-semibold text-[#1a1a1a] border border-[#4a403a]/20 hover:border-[#4a403a]/40 hover:bg-[#4a403a]/5 rounded-full transition-all duration-500"
            >
                Contactanos
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
        </div>
    );
}
