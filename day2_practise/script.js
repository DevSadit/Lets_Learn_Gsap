const headerTimeLine = gsap.timeline();
const bannerTimeLine = gsap.timeline();

// navbar
headerTimeLine.from("nav h1", {
    y: -30,
    duration: 1,
    opacity: 0,
})
headerTimeLine.from(".links ul li", {
    x: -20,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
})

// banner

bannerTimeLine.from(".text-box h2", {
    delay: .5,
    duration: 1,
    x: -20,
    opacity: 0,
})
bannerTimeLine.from(".text-box p", {
    duration: 1,
    y: -20,
    opacity: 0,
})
bannerTimeLine.from(".img-box", {
    duration: 1.7,
    opacity: 0,
})

// technology 

gsap.to("logo-box", {
    
})