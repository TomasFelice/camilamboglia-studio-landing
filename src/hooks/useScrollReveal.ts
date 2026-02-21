"use client";

import { useEffect, useRef } from "react";

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement>(
    options: UseScrollRevealOptions = {}
) {
    const ref = useRef<T>(null);
    const { threshold = 0.1, rootMargin = "0px 0px -50px 0px" } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Find all elements with scroll-reveal classes within this container
        const revealElements = element.querySelectorAll(
            ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
        );

        // Also check if the container itself has a scroll-reveal class
        const allElements: Element[] = [];
        if (
            element.classList.contains("scroll-reveal") ||
            element.classList.contains("scroll-reveal-left") ||
            element.classList.contains("scroll-reveal-right") ||
            element.classList.contains("scroll-reveal-scale")
        ) {
            allElements.push(element);
        }
        revealElements.forEach((el) => allElements.push(el));

        if (allElements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin }
        );

        allElements.forEach((el) => observer.observe(el));

        return () => {
            allElements.forEach((el) => observer.unobserve(el));
        };
    }, [threshold, rootMargin]);

    return ref;
}
