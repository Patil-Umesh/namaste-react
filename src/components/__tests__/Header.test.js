import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should load Header component with Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const logginButton = screen.getByRole("button");
  const logginButton = screen.getByRole("button", { name: "Login" });
  expect(logginButton).toBeInTheDocument();
});
test("Should click Login button to make it logout", () => {
  //Rener
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //Querying
  const logginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(logginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  //Assertion
  expect(logoutButton).toBeInTheDocument();
});
