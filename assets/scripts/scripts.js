document.addEventListener("DOMContentLoaded", () => {
  // DO NOT USE innerHTML to add text
  // USE .textContent INSTEAD
  document.getElementById("mainTitle").textContent = "Hello World";

  // using querySelector()
  document.querySelector("#exampleSpan");

  // using querySelectorAll() then looping
  const allDiv = document.querySelectorAll("div");
  for (const d of allDiv) {
    d.innerText = "changed!";
  }

  // uses forEach()
  allDiv.forEach((singleDiv, indexNum) => {
    singleDiv.textContent = "These used forEach(): " + indexNum;
  });
});
