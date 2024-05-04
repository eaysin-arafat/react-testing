import { MuiMode } from "../../src/components/MuiMode";
import { render, screen } from "../test-utils";

describe("MuiMode", () => {
  it("renders text crrectly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
