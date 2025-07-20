// Smooth scroll when "Learn More" button is clicked
document.addEventListener("DOMContentLoaded", function () {
  const learnMoreBtn = document.getElementById("learn-more-btn");
  const aboutSection = document.getElementById("about");

  if (learnMoreBtn && aboutSection) {
    learnMoreBtn.addEventListener("click", function () {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
