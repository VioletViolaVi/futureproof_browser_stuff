/**
 * @jest-environment jsdom
 */

const { updateBtn } = require("../assets/scripts/scripts");

describe("update btn text", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = "<button id='btn'></button>";
  });

  test("it updates btn display when clicked", () => {
    updateBtn("testing");
    const btn = document.getElementById("btn");
    expect(btn.textContent).toEqual("testing");
  });
});
