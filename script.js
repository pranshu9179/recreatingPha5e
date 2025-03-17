document.addEventListener("DOMContentLoaded", () => {
  const duration = 0.7;
  const staggerDelay = 0.2;

  gsap.from("nav", {
    opacity: 0,
    y: -50,
    duration: duration,
    ease: "power3.out",
  });

  gsap.from("h1 .big-text", {
    opacity: 0,
    y: 50,
    duration: duration,
    stagger: staggerDelay,
    ease: "power3.out",
  });

  gsap.from(".left-img", {
    opacity: 0,
    scale: 0.8,
    x: -50,
    duration: duration,
    stagger: 0.15,
    ease: "power2.out",
  });

  gsap.from(".right-img", {
    opacity: 0,
    scale: 0.8,
    x: 50,
    duration: duration,
    stagger: 0.15,
    ease: "power2.out",
  });

  const images = document.querySelectorAll(".hover-img");
  images.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      gsap.to(images, {
        opacity: 0.2,
        duration: 0.2,
      });

      gsap.to(img, {
        opacity: 1,
        scale: 1.2,
        x: img.classList.contains("left-img") ? -10 : 10,
        y: -10,
        duration: 0.3,
      });
    });

    img.addEventListener("mouseleave", () => {
      gsap.to(images, {
        opacity: 1,
        duration: 0.2,
      });

      gsap.to(img, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.3,
      });
    });
  });

  let lastMoveTime = 0;
  document.addEventListener("mousemove", (event) => {
    const now = Date.now();
    if (now - lastMoveTime < 50) return;
    lastMoveTime = now;

    const { clientX, clientY } = event;
    gsap.to(".hover-img", {
      x: (clientX - window.innerWidth / 2) * 0.02,
      y: (clientY - window.innerHeight / 2) * 0.02,
      duration: 0.5,
      ease: "power2.out",
    });
  });
  gsap.from(".skills-left", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });

  gsap.from(".skills-right", {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".skills-section",
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".transition-section",
    start: "top 50%",
    end: "bottom 50%",
    onEnter: () => document.body.classList.add("white-bg"),
    onLeaveBack: () => document.body.classList.remove("white-bg"),
  });
  window.addEventListener("scroll", function () {
    let transitionSection = document.querySelector(".transition-section");
    let navbar = document.getElementById("navbar");

    if (window.scrollY >= transitionSection.offsetTop - 100) {
      document.body.classList.add("scrolled");
      navbar.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
      navbar.classList.remove("scrolled");
    }
  });

  gsap.from(".hidden-logo", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
  });

  gsap.from(".awards-logos img", {
    opacity: 0,
    scale: 0.8,
    stagger: 0.3,
    duration: 1,
    ease: "power2.out",
  });
});
