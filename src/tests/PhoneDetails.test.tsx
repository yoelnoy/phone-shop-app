import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PhoneDetails from "../pages/PhoneDetails";

jest.mock("../hooks/useGetPhoneDetails", () => ({
  useGetPhoneDetails: () => ({
    data: {
      id: "1",
      name: "iPhone 13",
      brand: "Apple",
      description: "The latest iPhone",
      basePrice: 899,
      rating: 4.7,
      imageUrl: "/assets/iphone.png",
      colorOptions: [
        {
          name: "black",
          hexCode: "#000000",
          imageUrl: "/assets/iphone-black.png",
        },
      ],
      storageOptions: [
        {
          capacity: "128GB",
          price: 899,
        },
      ],
      specs: {
        screen: "6.1 inch",
        resolution: "2532x1170",
        processor: "A15 Bionic",
        mainCamera: "12MP",
        selfieCamera: "12MP",
        battery: "3240mAh",
        os: "iOS",
        screenRefreshRate: "60Hz",
      },
      similarProducts: [],
    },
    isLoading: false,
  }),
}));

jest.mock("../context/CartContext", () => ({
  useCart: () => ({
    addToCart: jest.fn(),
  }),
}));

describe("PhoneDetails", () => {
  it("renders phone details and allows adding to cart", () => {
    render(
      <BrowserRouter>
        <PhoneDetails />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("storage-option"));
    fireEvent.click(screen.getByTestId("color-option-black"));
    const addButton = screen.getByTestId("add-button");

    expect(addButton).not.toBeDisabled();
  });
});
