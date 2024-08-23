const tLine1 = gsap.timeline();
tLine1.from(".header h1", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.5,
})
tLine1.from(".header h2", {
    y: -30,
    opacity: 0,
    duration: 0.5,
})

// scrolltrigger

gsap.from("#page1 #box1", {
    opacity:0,
    scale: 0.5,
    rotate: 360,
    delay:1,
    duration:1,
})
gsap.from("#page2 #box2", {
    opacity:0,
    scale: 0,
    rotate: 360,
    duration:1,
    scrollTrigger: {
        trigger: "#page2 #box2",
        scroller: "body",
        markers: true,
        start: "top 60%",
    }
})

// page 3 

gsap.from("#page3 h1", {
    opacity: 0,
    x: -500,
    scale: 0,
    duration:2,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "body",
        start: "top 60%",
    }
})
gsap.from("#page3 h2", {
    opacity: 0,
    x: 500,
    scale: 0,
    duration:2,
    scrollTrigger: {
        trigger: "#page3 h2",
        scroller: "body",
        start: "top 60%",
    }
})