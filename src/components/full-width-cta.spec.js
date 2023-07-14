import React from "react";
import renderer from "react-test-renderer";
import { getByTitle, render } from "@testing-library/react";
import FullWidthCTA from "./full-width-cta";

//Test if copy inside a component is rendered
test("If Text is rendered!", () => {
  const { getByText } = render(
    <FullWidthCTA
      title={"Boost your productivity. Start using our app today."}
    />
  );
  expect(
    getByText("Boost your productivity. Start using our app today.")
  ).toBeInTheDocument();
});

describe("The image component", () => {
  //   test("alt contains correct value", () => {
  //     render(<FullWidthCTA imageURL={"/testImage1.jpg"} />);
  //     const testImage = document.querySelector("img");
  //     expect(testImage.alt).toContain("The image alt tag for the large image");
  //   });

  test("src contains correct value", () => {
    const { getByTitle } = render(
      <FullWidthCTA imageURL={"/testImage1.jpg"} />
    );
    expect(getByTitle("background").style.backgroundImage).toEqual(
      "url(/testImage1.jpg)"
    );
  });
});
// test("If Text is Different", () => {
//   const { getByText } = render(
//     <FullWidthCTA
//       title={"Boost your productivity. Start using our app today."}
//     />
//   );
//   expect(
//     getByText("Boost your. Start using our app today.")
//   ).toBeInTheDocument();
// });
