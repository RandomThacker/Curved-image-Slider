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
      alignOrigin: [1.2, 1.5],
      // set x of align origin to 1.2 so it goes behind the screen
      autoRotate: true,
      start: 0,
    end: 1,
    },
    transformOrigin: "50% 50%",
    duration: 3,

    ease: "power1.inOut",
    stagger: staggerValue, // Change stagger value based on screen width
  });
  // cardAnimationTimeline.reverse();
}

// Initial stagger setup
updateStagger();

// Update stagger on window resize
window.addEventListener("resize", updateStagger);

ScrollTrigger.create({
  animation: cardAnimationTimeline,
  trigger: ".durability-header",
  pin: ".durability-section",
  start: "top top",
  end: "bottom -150%",
  scrub: true,
  markers: true, // For debug purposes, can be removed
});
