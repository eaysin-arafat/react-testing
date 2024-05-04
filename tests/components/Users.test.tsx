import { render, screen } from "@testing-library/react";
import { Users } from "../../src/components/Users";
import { server } from "../../src/mocks/server";
import { HttpResponse, http } from "msw";

describe("Users", () => {
  it("renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  it("renders a list of users", async () => {
    render(<Users />);

    const users = await screen.findAllByRole("listitem");

    expect(users).toHaveLength(3);
  });

  it("renders error", async () => {
    server.use(
      http.get(
        "https://jsonplaceholder.typicode.com/users",
        () => new HttpResponse(null, { status: 500 })
      )
    );

    render(<Users />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});
