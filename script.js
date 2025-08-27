// let tl = gsap.timeline();

// tl.from("#nav1", {
//   y: -100,
//   opacity: 0,
//   duration: 1,
//   delay: 0.5,
//   ease: "power2.out"
// });

// tl.from(".nav2 h1", {
//   y: -80,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.3,
//   ease: "power2.out"
// });



// tl.from(".main > h1", {
//   y: 50,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.2,
//   ease: "power2.out"
// });

// tl.from(".main > #section1", {
//   y: 50,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.2,
//   ease: "power2.out"
// });

// tl.from(".main > h6", {
//   x: -50,
//   opacity: 0,
//   duration: 1,
//   stagger: 0.2,
//   ease: "power2.out"
// });

// tl.from(".main > p", {
//   scale: 0,
//   opacity: 0,
//   duration: 1,
//   ease: "back.out(1.7)"
// });

gsap.from("#page1 #circle", {
  scale: 0, 
  opacity: 0,
  duration: 2,
  delay:1,
  ease: "elastic.out(1, 0.3)" 
});
gsap.from("#page2 #circle", {
  scale: 0,
  duration: 2,
  rotate:720,
  scrollTrigger: {
    trigger: "#page2 #circle",
    scroller: "body", 
    markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  },
});

