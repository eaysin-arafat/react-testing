import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterTwo } from "../../src/components/CounterTwo";

it("renders correctly", () => {
  render(<CounterTwo count={0} />);
  const textElement = screen.getByText("Counter Two");
  expect(textElement).toBeInTheDocument();
});

it("should handlers are called", async () => {
  user.setup();

  const incrementHandler = vi.fn();
  const decrementHandler = vi.fn();

  render(
    <CounterTwo
      count={0}
      handleIncrement={incrementHandler}
      handleDecrement={decrementHandler}
    />
  );

  const incrementButton = screen.getByRole("button", { name: "Increment" });
  const decrementButton = screen.getByRole("button", { name: "Decrement" });
  await user.click(incrementButton);
  await user.click(decrementButton);

  expect(incrementHandler).toHaveBeenCalledTimes(1);
  expect(decrementHandler).toHaveBeenCalledTimes(1);
});
