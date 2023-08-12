function initScrollAnimation() {
  const revealInstance = ScrollReveal();
  revealInstance.reveal(document.querySelectorAll(".js-slide-opac"), {
    delay: 0,
    duration: 700,
    scale: 0.9,
    interval: 0,
    reset: false,
    mobile: false,
    opacity: 0,
    viewOffset: {
      bottom: 100,
      top: 100,
    },
  });
  revealInstance.reveal(document.querySelectorAll(".js-slide-left"), {
    delay: 0,
    distance: "100px",
    duration: 1000,
    origin: "left",
    reset: false,
    mobile: false,
    viewOffset: {
      bottom: 100,
      top: 100,
    },
  });
}
initScrollAnimation();


const myModalEngine = new HystModal({
  linkAttributeName: "data-hystmodal",
});