/**
 * @jest-environment jsdom
 */

// above is used to run tests as if it's in a browser, but it isn't

// needed imports to get other files in this doc. so tests can pass
const fs = require("fs");
const path = require("path");

// loads the result of reading the file where its directory is
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"));

describe("Index page", () => {
  // avoids typing same line of code & it runs each time before the other lines of code (instead of writing it in for every test())
  beforeEach(() => {
    // tells doc it's filled w/ our html
    document.documentElement.innerHTML = html.toString();
  });

  test("It displays a relevant title", () => {
    const heading = document.getElementById("mainTitle");

    // that heading is there
    expect(heading).toBeTruthy();

    // checks line of h1
    expect(heading.textContent).toEqual("Welcome");
  });

  test("Displays 3 divs ", () => {
    const divs = document.querySelectorAll("div");

    expect(divs).toBeTruthy();

    expect(divs.length).toEqual(4);
  });
});
