window.addEventListener("scroll", function () {
  const scrollSections = document.querySelectorAll(
    ".scroll-section, .scroll-left"
  );
  scrollSections.forEach((section) => {
    const sectionPos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.5;

    if (sectionPos < screenPos) {
      section.style.opacity = 1;
      if (section.classList.contains("scroll-left")) {
        section.style.transform = "translateX(0)";
      }
    }
  });

  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    const itemPos = item.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.5;

    if (itemPos < screenPos) {
      item.style.opacity = 1;
      item.style.transform = "scale(1)";
    }
  });
});
