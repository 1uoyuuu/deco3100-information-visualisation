gsap.registerPlugin(ScrollTrigger); //register the scrolltrigger plugin

//home page animation
gsap.from("#first-line", {
    x: "-100vw",
    duration: 1,
    ease: "ease-out"
});
gsap.from("#second-line", {
    x: "100vw",
    duration: 1,
    ease: "ease-out"
});
gsap.from("#third-line", {
    x: "-100vw",
    duration: 1,
    ease: "ease-out"
});

gsap.from(".webgl", {
    opacity: 0,
    delay: 1,
    duration: 1,
    ease: "ease-out"
});


gsap.from("#section-1 .flex-row", {
    scrollTrigger: {
        trigger: "#section-1",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    duration: 2,
    ease: "none"
});

// slide in effect from left and right
gsap.from("#section-1-row-1", {
    scrollTrigger: {
        trigger: "#section-1",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true,
    },
    x: "-100vw",
    duration: 2,
    ease: "ease-out"
});

gsap.from("#section-1-row-2", {
    scrollTrigger: {
        trigger: "#section-1",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    x: "100vw",
    duration: 2,
    ease: "ease-out"
});

// bouncy effect for the earth illustration
gsap.fromTo("#sad-earth", {scale: 0, opacity: 0, rotate:30},{
    scrollTrigger: {
        trigger: "#section-2",
        start: "top 30%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
    },
    scale: 1,
    opacity: 1,
    rotate: 0,
    duration: 1.5,
    ease: "elastic.out(1,0.5)"
});
// reveal text when scroll down
gsap.from("#section-2 .text-container", {
    scrollTrigger: {
        trigger: "#section-2",
        start: "top 20%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    duration: 2,
    ease: "none"
});


// reveal text when scroll down
gsap.from("#section-2-5 .text-container", {
    scrollTrigger: {
        trigger: "#section-2-5",
        start: "top 30%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    duration: 2,
    ease: "none"
});
// reveal chart from opacity 0
gsap.from("#section-2-5 .chart-container", {
    scrollTrigger: {
        trigger: "#section-2-5",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    duration: 2,
    ease: "ease-out"
});

// delay the apperance of position text to give users some time to interact
gsap.fromTo("#biomass-position", {scale: 0},{
    scrollTrigger: {
        trigger: "#biomass-chart",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
    },
    scale: 1,
    duration: 2,
    delay: 6,
    ease: "bounce"
});

// rotate to reveal the image
gsap.from("#flock-of-sheep", {
    scrollTrigger: {
        trigger: "#section-3",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    scale: 0,
    rotate: 120,
    duration: 2,
    ease: "ease-out"
});


// reveal when scroll down
gsap.from("#section-3 .text-container", {
    scrollTrigger: {
        trigger: "#section-3",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    duration: 2,
    ease: "none"
});

// reveal text when scroll down
gsap.from("#section-4 .text-container", {
    scrollTrigger: {
        trigger: "#section-4",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    scale: 0,
    duration: 2,
    ease: "none"
});
// move up the image from bottom
gsap.from("#human-evolution", {
    scrollTrigger: {
        trigger: "#section-4",
        start: "top 30%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    y: "100vh",
    duration: 2,
    ease: "none"
});


// slide in from right
gsap.from("#section-5 .text-container", {
    scrollTrigger: {
        trigger: "#section-5",
        start: "top 30%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    x: "100vw",
    duration: 2,
    ease: "ease-out"
});
gsap.from("#section-5 .chart-container", {
    scrollTrigger: {
        trigger: "#section-5",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    duration: 2,
    ease: "ease-out"
});


// scale up the heading from zero
gsap.fromTo("#section-6 h1", {scale: 0},{
    scrollTrigger: {
        trigger: "#section-6",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    scale: 1.4,
    duration: 2,
    ease: "ease-out"
});
// rotate the highlighting text span 
gsap.to("#section-6 .rotate-text",{
    scrollTrigger: {
        trigger: "#section-6",
        start: "top 30%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    rotate: 30,
    y: "1rem",
    duration: 2,
    ease: "ease-out"
});
// reveal the carousel from opacity 0
gsap.from("#section-6 .flex-item:last-child", {
    scrollTrigger: {
        trigger: "#section-6",
        start: "top 20%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    duration: 2,
    ease: "ease-out"
});

// scale up the heading from zero
gsap.fromTo("#section-7 h1", {scale: 0},{
    scrollTrigger: {
        trigger: "#section-7",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    scale: 1.4,
    duration: 2,
    ease: "ease-out"
});
// rotate the highlighting text span 
gsap.to("#section-7 .rotate-text",{
    scrollTrigger: {
        trigger: "#section-7",
        start: "top 30%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    rotate: -30,
    y: "-1rem",
    duration: 2,
    ease: "ease-out"
});
// reveal the chart from bottom
gsap.from("#section-7 .flex-row:last-child", {
    scrollTrigger: {
        trigger: "#section-7",
        start: "top 20%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    y: "100vh",
    duration: 2,
    ease: "ease-out"
});

// reveal the text
gsap.from("#section-8 .flex-row:first-child .flex-item:first-child", {
    scrollTrigger: {
        trigger: "#section-8",
        start: "top 60%",
        end: "top 40%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    duration: 3,
    ease: "ease-in"
});

// slide in the text
gsap.from("#section-8 .flex-row:first-child .flex-item:last-child", {
    scrollTrigger: {
        trigger: "#section-8",
        start: "top 40%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    x: "100vw",
    duration: 2,
    ease: "ease-in"
});

// reveal the cards
gsap.from("#section-8 .flex-row:last-child .flex-item", {
    scrollTrigger: {
        trigger: "#section-8",
        start: "top 20%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    duration: 2,
    ease: "ease-in"
});

// reveal text when scroll down
gsap.from("#section-9 .flex-row:first-child .text-container", {
    scrollTrigger: {
        trigger: "#section-9",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    scale: 0,
    duration: 2,
    ease: "none"
});
// slide in effect from left and right
gsap.from("#section-9 .flex-row:last-child .text-container", {
    scrollTrigger: {
        trigger: "#section-9",
        start: "top 30%",
        end: "top 10%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true,
    },
    x: "-100vw",
    duration: 2,
    ease: "ease-out"
});
gsap.from("#section-9 .flex-row:last-child .chart-container", {
    scrollTrigger: {
        trigger: "#section-9",
        start: "top 30%",
        end: "top 10%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    x: "100vw",
    duration: 2,
    ease: "ease-out"
});

// reveal text when scroll down
gsap.from("#section-10 .flex-row:first-child", {
    scrollTrigger: {
        trigger: "#section-10",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    y: "100vh",
    scale: 0,
    duration: 2,
    ease: "ease-in"
});

// slide in effect from left and right
gsap.from("#section-10 .flex-row:last-child .text-container", {
    scrollTrigger: {
        trigger: "#section-10",
        start: "top 30%",
        end: "top 10%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true,
    },
    x: "-100vw",
    duration: 2,
    ease: "ease-out"
});
gsap.from("#section-10 .flex-row:last-child .chart-container", {
    scrollTrigger: {
        trigger: "#section-10",
        start: "top 30%",
        end: "top 10%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    x: "100vw",
    duration: 2,
    ease: "ease-out"
});

// reveal text when scroll down
gsap.from("#section-11 .flex-row:first-child", {
    scrollTrigger: {
        trigger: "#section-11",
        start: "top 40%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    y: "-100vh",
    scale: 0,
    duration: 2,
    ease: "ease-in"
});

// reveal the highlighting text
gsap.to("#section-11 .flex-row:first-child span", {
    scrollTrigger: {
        trigger: "#section-11",
        start: "top 20%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    y: "1rem",
    rotate: 360,
    duration: 2,
    ease: "ease-in"
});

// scale the glowing globe from 0 to 1
gsap.from("#cobe", {
    scrollTrigger: {
        trigger: "#section-11",
        start: "top 20%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    scale: 0,
    duration: 2,
    ease: "ease-in"
});
// slide in the accordion from right
gsap.from(".accordion-container", {
    scrollTrigger: {
        trigger: "#section-11",
        start: "top 20%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    x: "100vw",
    opacity: 0,
    duration: 2,
    ease: "ease-in"
});

// rotate to reveal the image
gsap.from("#burning-earth", {
    scrollTrigger: {
        trigger: "#section-12",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    scale: 0,
    rotate: 180,
    duration: 2,
    ease: "ease-out"
});

// slide in the accordion from right
gsap.from("#section-12 .text-container", {
    scrollTrigger: {
        trigger: "#section-12",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    x: "-100vw",
    opacity: 0,
    duration: 2,
    ease: "ease-in"
});

gsap.from("#section-13 .flex-row", {
    scrollTrigger: {
        trigger: "#section-13",
        start: "top 40%",
        end: "top 10%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    y: "100vh",
    duration: 2,
    ease: "ease-in"
});
gsap.from("#section-14 .flex-row", {
    scrollTrigger: {
        trigger: "#section-14",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    y: "100vh",
    duration: 2,
    ease: "ease-in"
});


// scale the glowing globe from 0 to 1
gsap.from("#section-15 .text-container", {
    scrollTrigger: {
        trigger: "#section-15",
        start: "top 50%",
        end: "top 20%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    x: "-100vw",
    duration: 2,
    ease: "ease-in"
});
// slide in the accordion from right
gsap.from("#section-15 .chart-container", {
    scrollTrigger: {
        trigger: "#section-15",
        start: "top 20%",
        end: "top 0%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    duration: 2,
    ease: "ease-in"
});

// reveal text when scroll down
gsap.from("#section-16", {
    scrollTrigger: {
        trigger: "#section-16",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "restart none none none",
        // meaning of these four parameter: onEnter onLeave Enterback LeaveBack
        scrub: true
    },
    opacity: 0,
    scale: 0,
    duration: 2,
    ease: "ease-in"
});