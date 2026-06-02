const revealElements = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll(".panel");
const navLinks = document.querySelectorAll("nav a");
const scrollContainer = document.querySelector(".scroll-container");

// reveal animation
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.25,
    root: scrollContainer
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// active nav highlight
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.6,
    root: scrollContainer
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});