let tl = gsap.timeline(); // lowercase 'timeline', not 'timeLine'

tl.from("#nav1",{
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.5,
    ease: "power2.out"
})
tl.from(".nav2",{
    y: -100,
    opacity: 0,
    duration: 1,    
    delay: 0.5,
    stagger: 0.5,
})
