import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PhoneGrid from "../components/PhoneGrid";
import { Phone } from "../types/phone";

const phones: Phone[] = [
  {
    id: "1",
    name: "iPhone 13",
    brand: "Apple",
    basePrice: 999,
    rating: 4.5,
    imageUrl: "/assets/test.png",
    colorOptions: [],
    storageOptions: [],
    specs: {
      screen: "6.1 inch",
      resolution: "1170x2532",
      processor: "A15 Bionic",
      mainCamera: "12 MP",
      selfieCamera: "12 MP",
      battery: "3095 mAh",
      os: "iOS",
      screenRefreshRate: "60Hz",
    },
    description: "Test phone",
    similarProducts: [],
  },
];

describe("PhoneGrid", () => {
  it("renders phone items correctly", () => {
    render(
      <BrowserRouter>
        <PhoneGrid phones={phones} />
      </BrowserRouter>
    );

    expect(screen.getByText(/IPHONE 13/i)).toBeInTheDocument();
    expect(screen.getByText(/APPLE/i)).toBeInTheDocument();
    expect(screen.getByText(/999/i)).toBeInTheDocument();
  });
});
