setTimeout(function() {
  fadeOutPreloader(document.getElementById('preloader'), 69);
}, 1500);

$(document).ready(function() {
  $(window).on('beforeunload', function() {
    window.scrollTo(0, 0);
  });

  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  // particlesJS.load('landing', 'assets/particles.json', function() {});

  // Initialize AOS
  AOS.init({
    disable: 'mobile',
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
    once: true
  });

  // randomizeOrder();
});

/* FUNCTIONS */
/* Preloader */

function fadeOutPreloader(element, duration) {
  opacity = 1;

  interval = setInterval(function() {
    if (opacity <= 0) {
      element.style.zIndex = 0;
      element.style.opacity = 0;
      element.style.filter = 'alpha(opacity = 0)';

      // Allow horizontal scroll
      document.documentElement.style.overflowY = 'auto';

      // Remove preloader div
      document.getElementById('preloader').remove();

      clearInterval(interval);
    } else {
      opacity -= 0.1;
      element.style.opacity = opacity;
      element.style.filter = 'alpha(opacity = ' + opacity * 100 + ')';
    }
  }, duration);
}
