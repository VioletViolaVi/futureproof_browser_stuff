const btn = document.getElementById("btn");
const allDiv = document.querySelectorAll("div");
btn.addEventListener("click", (e) => {
  e.target.textContent = "changed";

  allDiv.forEach((d, i) => {
    d.addEventListener("click", (e) => {
      updateBtn(i);
    });
  });
});
