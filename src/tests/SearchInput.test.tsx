import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import SearchInput from "../components/SearchInput";

describe("SearchInput", () => {
  it("renders the input and handles changes", () => {
    const setSearch = jest.fn();
    render(<SearchInput search="" setSearch={setSearch} count={5} />);

    const input = screen.getByPlaceholderText(/search for a smartphone/i);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "iPhone" } });
    expect(setSearch).toHaveBeenCalledWith("iPhone");
  });

  it("shows result count", () => {
    render(<SearchInput search="" setSearch={() => {}} count={3} />);
    expect(screen.getByText(/3/i)).toBeInTheDocument();
  });
});
