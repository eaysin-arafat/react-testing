import { render, screen } from "@testing-library/react";
import { Counter } from "../../src/components/Counter";
import userEvent from "@testing-library/user-event";

describe("group", () => {
  const user = userEvent.setup();

  it("should renders a count of 1 after clicking the increment button", async () => {
    render(<Counter />);

    const button = screen.getByRole("button", { name: "Increment" });

    await user.click(button);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  it("should count of 10 after clicking the set button", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  it("element are focused in the right order", async () => {
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: "Set" });
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
