gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const cardAnimationTimeline = gsap.timeline({
  paused: true,
  id: "cardAnimation",
});

function updateStagger() {
  const screenWidth = window.innerWidth;

  let staggerValue;

  if (screenWidth < 500) {
    staggerValue = 3;
  } else if (screenWidth >= 500 && screenWidth < 800) {
    staggerValue = 1.5;
  } else if (screenWidth >= 800 && screenWidth < 1500) {
    staggerValue = 1;
  } else {
    staggerValue = 0.9; // Default value for larger screens
  }

  cardAnimationTimeline.to(".durable-card", {
    motionPath: {
      path: "#path",
      align: "#path",
      alignOrigin: [0.5, 2.5],
      autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: 5,

    ease: "power1.inOut",
    stagger: staggerValue, // Change stagger value based on screen width
  });
  cardAnimationTimeline.reverse();
}

// Initial stagger setup
updateStagger();

// Update stagger on window resize
window.addEventListener("resize", updateStagger);

ScrollTrigger.create({
  animation: cardAnimationTimeline,
  trigger: ".durable-card",
  pin: ".durability-section",
  start: "top center",
  end: "bottom -40%",
  scrub: true,
  markers: true, // For debug purposes, can be removed
});
