import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
    const timeline = gsap.timeline();

    timeline.to(position, {
        x,
        y,
        z,
        scrollTrigger: {
            trigger: '.sound-section',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false,
        },
        onUpdate
    });
}