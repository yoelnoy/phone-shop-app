import { fireEvent, screen } from "@testing-library/react";

import { CartItem } from "../types/cartItem";
import { renderWithProviders } from "./test-utils";
import Cart from "../pages/Cart";

const mockItem: CartItem = {
  id: "123",
  name: "iPhone 13",
  brand: "Apple",
  imageUrl: "/assets/iphone-black.png",
  color: "Black",
  storage: "128GB",
  price: 899,
  quantity: 1,
};

describe("Cart Page", () => {
  beforeEach(() => {
    // Simulate cart with one item
    localStorage.setItem("zara-cart", JSON.stringify([mockItem]));
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("renders cart items correctly", () => {
    renderWithProviders(<Cart />);
    expect(screen.getByText(/iphone 13/i)).toBeInTheDocument();
    expect(screen.getAllByText(/899 eur/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/128GB/i)).toBeInTheDocument();
    expect(screen.getByText(/black/i)).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("updates item quantity when + and - buttons are clicked", () => {
    renderWithProviders(<Cart />);

    // Get quantity display and buttons
    const incrementButton = screen.getAllByRole("button", { name: "+" })[0];
    const decrementButton = screen.getAllByRole("button", { name: "-" })[0];
    const removeButton = screen.getByTestId("cart-count");

    // Increase quantity
    fireEvent.click(incrementButton);
    expect(removeButton).toHaveTextContent("CART (2)");

    // Decrease quantity
    fireEvent.click(decrementButton);
    expect(removeButton).toHaveTextContent("CART (1)");

    // Try to go below 1
    fireEvent.click(decrementButton);
    expect(removeButton).toHaveTextContent("CART (1)");
  });

  it("removes item from cart when remove button is clicked", () => {
    renderWithProviders(<Cart />);

    const removeButton = screen.getByTestId("cart-remove-btm");
    fireEvent.click(removeButton);

    expect(screen.queryByText(/iphone 13/i)).not.toBeInTheDocument();
    expect(screen.getByTestId("cart-count")).toHaveTextContent("CART (0)");
  });

  it("has a continue shopping link that points to home", () => {
    renderWithProviders(<Cart />);

    const continueShoppingBtns = screen.getAllByTestId(
      "cart-continue-shopping-btm"
    );

    expect(continueShoppingBtns.length).toBeGreaterThan(0);

    continueShoppingBtns.forEach((btn) => {
      expect(btn).toHaveAttribute("href", "/");
    });
  });
});
