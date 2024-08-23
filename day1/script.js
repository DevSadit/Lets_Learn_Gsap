gsap.from(".header", {
  y: -30,
  delay: 1,
  opacity: 0,
  duration: 0.8,
});

gsap.to("#box1", {
  x: 500,
  duration: 1,
  delay: 1,
});
gsap.from("#box2", {
  x: 500,
  duration: 1,
  delay: 1,
});

gsap.to("#box3", {
  x: 500,
  duration: 1,
  delay: 1,
  rotate: 360,
  // repeat: -1, // infinite time
  yoyo: true, // feeling like a yoyo!
  scale: 0.5,
});

// stagger
gsap.from("h3", {
  opacity: 0,
  delay: 1,
  duration: 0.8,
  stagger: 1,
});

// timeline
const tLine = gsap.timeline();

tLine.to("#box4", {
  x: 500,
  duration: 1,
  borderRadius: "50%",
});
tLine.to("#box5", {
  x: 500,
  scale: 0.5,
  duration: 1,
  borderRadius: "50%",
});
tLine.to("#box6", {
  x: 500,
  duration: 1,
  borderRadius: "50%",
});

// navbar
const newTl = gsap.timeline();


newTl.from("h1", {
  y: -20,
  opacity: 0,
  duration: 0.8,
});
newTl.from("h4", {
  y: -30,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
});
