document.addEventListener("DOMContentLoaded", function () {
  // Fade-in for sections on scroll
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  sections.forEach((section) => observer.observe(section));

  // Scroll to top button functionality
  const topBtn = document.getElementById("topBtn");
  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Fun fact generator
  const factElement = document.getElementById("fact");
  const funFactBtn = document.getElementById("funFactBtn");

  const facts = [
    "jeg har spilt håndball i 10 år",
    "jeg kan litt tysk",
    "jeg er sjukt god i frisbigolf",
    "jeg hadde en tann mellom fortenna",
  ];

  funFactBtn.addEventListener("click", function () {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factElement.textContent = randomFact;
  });
});
