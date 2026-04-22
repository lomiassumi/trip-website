// script.js

const facts = [
  "Dzüko Valley is famous for the rare Dzüko Lily flower.",
  "The valley lies on the border of Nagaland and Manipur.",
  "It is one of the best trekking destinations in Northeast India.",
  "During monsoon, the valley becomes a carpet of green hills and flowers.",
  "Dzüko means 'cold water' in the local language."
];

const button = document.getElementById("infoButton");
const factText = document.getElementById("factText");

button.addEventListener("click", () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  factText.textContent = randomFact;
});

/* Fade animation on scroll */
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
});