document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("section-visible");
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        },
        {
            threshold: 0.1, // Trigger animation when 10% of the section is visible
        }
    );

    sections.forEach((section) => {
        section.classList.add("section-hidden"); // Hide sections initially
        observer.observe(section); // Start observing sections
    });
});