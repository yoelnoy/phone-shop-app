import { useState } from "react";
import { useGetPhoneDetails } from "../hooks/useGetPhoneDetails";
import PhoneSpecifications from "../components/PhoneSpecifications";
import SimilarProducts from "../components/SimilarProducts";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import { STRINGS } from "../constants";

function PhoneDetails() {
  const { data: phone, isLoading } = useGetPhoneDetails();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);

  const goBack = () => navigate(-1);

  const currentImage =
    phone?.colorOptions.find((c) => c.name === selectedColor)?.imageUrl ||
    phone?.colorOptions[0]?.imageUrl;

  const selectedPrice =
    phone?.storageOptions.find((s) => s.capacity === selectedStorage)?.price ||
    phone?.basePrice;

  const canAddToCart = selectedColor && selectedStorage;

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : phone ? (
        <div className="pb-10">
          <div className="sticky top-0 z-50 bg-white py-4">
            <button
              className="px-5 md:px-[6.25rem] cursor-pointer flex items-center"
              onClick={goBack}
            >
              <img src="/assets/leftArrow.svg" alt="go-back" />
              <p className="text-xs">{STRINGS.buttons.goBack.toUpperCase()}</p>
            </button>
          </div>

          <div className="w-full max-w-[1200px] px-5 2xl:ml-[22rem] 2xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:py-28">
              <div className="flex justify-center md:justify-start">
                <img
                  src={currentImage}
                  alt={phone.name}
                  className="w-[260px] md:w-max max-w-96 h-auto"
                />
              </div>

              <div className="w-full flex flex-col justify-center items-center md:items-end font-light ">
                <div className="w-full md:w-[380px] ">
                  <div className="gap-[11px]">
                    <p className="text-xl">{phone.name}</p>
                    <p className="text-base  text-gray-600">
                      {!selectedColor || !selectedStorage
                        ? `From ${phone.storageOptions[0].price} EUR`
                        : `${selectedPrice} EUR`}
                    </p>
                  </div>

                  <div className="my-6 space-y-3">
                    <p className="text-xs ">
                      {STRINGS.pages.productDetails.storageText.toUpperCase()}
                    </p>
                    <div className="flex">
                      {phone.storageOptions.map((option) => (
                        <button
                          key={option.capacity}
                          data-testid="storage-option"
                          onClick={() => setSelectedStorage(option.capacity)}
                          className={`border p-4 text-sm min-w-20 cursor-pointer ${
                            selectedStorage === option.capacity
                              ? "border-black"
                              : "border-gray-300"
                          }`}
                        >
                          {option.capacity}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="relative space-y-3">
                    <p className="text-xs">
                      {" "}
                      {STRINGS.pages.productDetails.colorText.toUpperCase()}
                    </p>
                    <div className="flex gap-3">
                      {phone.colorOptions.map((option) => (
                        <div
                          key={option.name}
                          className={`p-[1px] flex  ${
                            selectedColor === option.name
                              ? " ring-black"
                              : " ring-gray-400"
                          } ring`}
                        >
                          <button
                            data-testid={`color-option-${option.name}`}
                            onClick={() => setSelectedColor(option.name)}
                            className={`w-6 h-6  cursor-pointer ${
                              selectedColor === option.name
                                ? "border-black"
                                : "border-gray-300"
                            }`}
                            style={{ backgroundColor: option.hexCode }}
                          />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs absolute -bottom-6">
                      {selectedColor}
                    </p>
                  </div>

                  <button
                    data-testid="add-button"
                    disabled={!canAddToCart}
                    onClick={() => {
                      if (!selectedColor || !selectedStorage) return;

                      addToCart({
                        id: phone.id,
                        name: phone.name,
                        brand: phone.brand,
                        imageUrl:
                          phone.colorOptions.find(
                            (c) => c.name === selectedColor
                          )?.imageUrl || phone.imageUrl,
                        color: selectedColor,
                        storage: selectedStorage,
                        price: selectedPrice!,
                        quantity: 1,
                      });
                    }}
                    className={`w-full py-3 mt-8 text-sm cursor-pointer disabled:cursor-not-allowed ${
                      canAddToCart
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {STRINGS.buttons.add.toUpperCase()}
                  </button>
                </div>
              </div>
            </div>

            <PhoneSpecifications
              specs={{
                ...phone.specs,
                brand: phone.brand,
                name: phone.name,
                description: phone.description,
              }}
            />
          </div>
          {phone.similarProducts?.length > 0 && (
            <SimilarProducts products={phone.similarProducts} />
          )}
        </div>
      ) : null}
    </>
  );
}

export default PhoneDetails;
