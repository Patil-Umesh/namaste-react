import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  test("Should load Contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("Should load button inside Contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("Should load button inside Contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
  test("Should load textbox inside Contact us component", () => {
    render(<Contact />);
    const textbox = screen.getAllByRole("textbox");
    // console.log(textbox[0]);
    expect(textbox.length).toBe(2);
  });
});
