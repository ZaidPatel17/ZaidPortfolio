document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileBtn) {
    mobileBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      mobileBtn.textContent = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
    });
  }

  // Dynamic Year in Footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        navLinks.classList.remove("active");
        mobileBtn.textContent = "☰";
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Fade-in Animation on Scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(".fade-in");
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});
