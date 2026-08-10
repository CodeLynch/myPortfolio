window.addEventListener("DOMContentLoaded", init, false);

function init() {
  navigate("about-section");
}

//show one component and hide 3 components for "navigation"
function navigate(targetSection) {
  let sections = [
    "about-section",
    "skills-section",
    "projects-section",
    "links-section",
  ];
  let indexToShow = sections.findIndex((section) => section === targetSection);

  sections.forEach((section, i) => {
    if (i === indexToShow) {
      document.getElementById(section).style.display = "inline";
      document.getElementById(`${section}-nav`).style.color = "aqua";
    } else {
      document.getElementById(section).style.display = "none";
      document.getElementById(`${section}-nav`).style.color = "white";
    }
  });
}
