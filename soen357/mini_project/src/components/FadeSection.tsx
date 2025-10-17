// FadeSection.tsx
import { useEffect, useRef, useState } from "react";

export default function FadeSection({
    children,
}: {
    children: React.ReactNode;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }, // triggers when 20% of element is visible
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-700 ease-out ${visible ? "opacity-100" : "opacity-0"}`}
        >
            {children}
        </div>
    );
}
