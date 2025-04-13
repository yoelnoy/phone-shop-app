import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../context/CartContext";

export function renderWithProviders(ui: ReactNode) {
  return render(
    <BrowserRouter>
      <CartProvider>{ui}</CartProvider>
    </BrowserRouter>
  );
}
