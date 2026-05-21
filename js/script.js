const fadeElements = document.querySelectorAll(
  ".course-card, .gallery-grid img, .about-section"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }

  });

}, {
  threshold: 0.1
});

fadeElements.forEach((element) => {

  element.classList.add("fade-in");

  observer.observe(element);

});