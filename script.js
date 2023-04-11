gsap.registerPlugin(ScrollTrigger)

gsap.to(".box1", {
  x: 700,
  duration: 3,
  ScrollTrigger: ".box2"
  
})

gsap.to(".box2", {
  x: 700,
  duration: 3,
  ScrollTrigger: ".box3"
})


gsap.to(".box3", {
  x: 700,
  duration: 3,
  ScrollTrigger: ".box3"
})
