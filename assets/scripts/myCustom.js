document.addEventListener("DOMContentLoaded", function () {
  const firstHeading = document.getElementById("firstHeading");
  const secondHeading = document.getElementById("secondHeading");
  const sectionBox = document.getElementById("sectionBox");

  firstHeading.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "green";
  });

  firstHeading.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = "#fff5ee";
  });

  secondHeading.addEventListener("mouseover", (e) => {
    e.target.textContent = "hello greeting";
  });

  document.addEventListener("keypress", (e) => {
    // create para tag
    const newPara = document.createElement("p");

    // create text
    const newText = document.createTextNode(
      "NEW: Lorem ipsum dolor sit amet consectetur adipisicing elit."
    );

    // put new text in new p tag
    newPara.appendChild(newText);

    // put final product on page
    sectionBox.appendChild(newPara);
  });
});
