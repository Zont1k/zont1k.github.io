document.addEventListener("DOMContentLoaded", () => {
    // Анимация заголовка и соцсетей
    gsap.from(".hero h1", { duration: 1, y: 50, opacity: 0, ease: "power2.out" });
    gsap.from(".hero p", { duration: 1, y: 50, opacity: 0, delay: 0.3, ease: "power2.out" });
    gsap.from(".social-links a", { duration: 1, y: 50, opacity: 0, delay: 0.6, stagger: 0.2, ease: "power2.out" });

    // Анимация секций и декоративных линий
    gsap.utils.toArray("section").forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power2.out"
        });
        gsap.from(section.querySelectorAll(".decor-line"), {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            },
            duration: 1,
            scaleX: 0,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out"
        });
    });
});