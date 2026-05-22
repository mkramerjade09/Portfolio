document.addEventListener("DOMContentLoaded", () => {

  // ---------------- FADE IN ----------------
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

  fadeElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // ---------------- LIGHTBOX ----------------
  const images = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");

  // ONLY RUN LIGHTBOX IF IT EXISTS
  if (lightbox && lightboxImg && closeBtn) {

    images.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove("active");
      lightboxImg.src = "";
    };

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

  }

});