/**
 ********************************************************* NOTES:

  To keep tests running in terminal when using jest:
    "scripts": {
    "test": "jest --watch"
  },

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

  const btn = document.getElementById("btn");
  btn.addEventListener("mouseover", () => {
    console.log("mouseover");
  }); 

// "(e)" responds to the event itself & is better way to code
// if allDiv.textContent, e.g., needed changing u'd would not use "(e)"
// use console.log(e) to check contents
// e.target.textContent = "WHAT!"; // changes text on btn
*/

const updateBtn = (val) => {
  document.getElementById("btn").textContent = val;
};

// jest will know exports whilst browser doesn't aka handles browser/node differences
if (typeof exports !== "undefined") {
  module.exports = {
    updateBtn,
  };
}
