import { render, screen } from "@testing-library/react";
import { Greet } from "../../src/components/Greet";

describe("Greet", () => {
  it("should renders correctly", () => {
    render(<Greet />);

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
