gsap.from("#page1 .box1", {
    opacity: 0, 
    scale: 0, 
    rotate: 1440,
    duration: 2,
    delay: 1,

})
gsap.from("#page2 .box2", {
    opacity: 0, 
    scale: 0, 
    rotate: 1440,
    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: "#page2 .box2",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 20%",
        scrub: 3,
    }
})

// scrollTrigger: {
//     trigger: "#page2 #box2",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
// }