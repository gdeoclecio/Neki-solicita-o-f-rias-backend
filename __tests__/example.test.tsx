import { render, screen } from "@testing-library/react";

describe("Jest setup", () => {
  it("should render a simple text", () => {
    render(<p>Teste funcionando</p>);

    expect(screen.getByText("Teste funcionando")).toBeInTheDocument();
  });
});