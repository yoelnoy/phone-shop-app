jest.mock("../api/axiosInstance", () => ({
  axiosInstance: {
    get: jest.fn(),
  },
}));

import { screen } from "@testing-library/react";
import PhoneList from "../pages/PhoneList";
import { renderWithProviders } from "./test-utils";
import * as hookModule from "../hooks/useGetPhoneList";
import { UseQueryResult } from "@tanstack/react-query";
import { Phone } from "../types/phone";

describe("PhoneList Page", () => {
  const mockPhones = [
    {
      id: "1",
      name: "iPhone 13",
      brand: "Apple",
      description: "Latest iPhone",
      basePrice: 899,
      rating: 5,
      imageUrl: "/assets/iphone-black.png",
      colorOptions: [],
      storageOptions: [],
      specs: {
        screen: "6.1 inch",
        resolution: "2532x1170",
        os: "iOS",
        processor: "A15 Bionic",
        mainCamera: "12MP",
        selfieCamera: "12MP",
        battery: "3240mAh",
        screenRefreshRate: "60Hz",
      },
      similarProducts: [],
    },
  ];
  it("displays phones from useGetPhoneList", () => {
    jest.spyOn(hookModule, "useGetPhoneList").mockReturnValue({
      data: mockPhones,
      isLoading: false,
      isError: false,
      isSuccess: true,
      error: null,
      status: "success",
      refetch: jest.fn(),
      isFetching: false,
      isFetched: true,
      failureCount: 0,
      isPlaceholderData: false,
      dataUpdatedAt: Date.now(),
      errorUpdatedAt: 0,
      isPaused: false,
      remove: jest.fn(),
    } as unknown as UseQueryResult<Phone[], Error>);

    renderWithProviders(<PhoneList />);

    expect(screen.getByTestId("phone-list-page")).toBeInTheDocument();
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("results-count")).toBeInTheDocument();
    expect(screen.getByTestId("phone-grid")).toBeInTheDocument();

    expect(screen.getByText(/iphone 13/i)).toBeInTheDocument();
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
    expect(screen.getByTestId("results-count")).toHaveTextContent("1 RESULT");
  });

  it("shows loading indicator when loading", () => {
    jest.spyOn(hookModule, "useGetPhoneList").mockReturnValue({
      data: [],
      isLoading: true, // simulate loading
      isError: false,
      isSuccess: false,
      error: null,
      status: "loading",
      refetch: jest.fn(),
      isFetching: true,
      isFetched: false,
      failureCount: 0,
      isPlaceholderData: false,
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      isPaused: false,
      remove: jest.fn(),
    } as unknown as UseQueryResult<Phone[], Error>);

    renderWithProviders(<PhoneList />);
    expect(screen.getByTestId("loading-indicator")).toBeInTheDocument();
  });
});
