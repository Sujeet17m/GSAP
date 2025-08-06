let tl = gsap.timeline(); // lowercase 'timeline', not 'timeLine'

tl.from("#box", {
  opacity: 0.5,
  backgroundColor: "rgb(21, 126, 21)",
  duration: 1,
  x: 100,
  y: 100,
  rotation: 360,
  scale: 0.5,
  delay: 0.5
});
