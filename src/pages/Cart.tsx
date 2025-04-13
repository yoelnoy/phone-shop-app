import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { STRINGS } from "../constants";

function Cart() {
  const { items, cartCount, totalPrice, removeFromCart, updateQuantity } =
    useCart();

  return (
    <div className="relative flex flex-col font-light tracking-tighter pb-40 md:pb-24">
      <p
        data-testid="cart-count"
        className="text-lg md:text-xl sticky top-0 z-50 bg-white md:mb-4 py-2 md:py-6 px-5 md:px-[6.25rem] md:border-t"
      >
        {STRINGS.pages.cart.title.toUpperCase()} ({cartCount})
      </p>

      <div className="flex-1 px-5 md:px-[6.25rem]">
        <div className="flex-1 space-y-4">
          {items.map((item, index) => (
            <Link
              key={`${item.id}-${item.color}-${item.storage}-${index}`}
              to={`/product/${item.id}`}
              className="flex gap-4 items-center"
            >
              <div>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-30 h-30 md:w-80 md:h-80 object-contain cursor-pointer"
                />
              </div>

              <div className="flex flex-col items-start justify-between h-30 md:h-50 md:py-2 flex-1 ">
                <div className="space-y-2 md:space-y-4">
                  <div className="md:space-y-1">
                    <p className="text-sm">{item.name.toUpperCase()}</p>
                    <p className="text-xs text-gray-500">
                      {item.storage} | {item.color.toUpperCase()}
                    </p>
                  </div>

                  <div className="text-left space-y-1">
                    <p className="text-sm">
                      {item.price} {STRINGS.currency.name}
                    </p>

                    <div className="flex items-center gap-1 text-xs text-gray-500 transition">
                      <button
                        disabled={item.quantity <= 1}
                        onClick={(e) => {
                          e.preventDefault();
                          updateQuantity(
                            item.id,
                            item.color,
                            item.storage,
                            item.quantity - 1
                          );
                        }}
                        className="px-2 border-gray-400 hover:ring  hover:ring-gray-500 cursor-pointer disabled:cursor-not-allowed"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          updateQuantity(
                            item.id,
                            item.color,
                            item.storage,
                            item.quantity + 1
                          );
                        }}
                        className="px-2  border-gray-400  hover:ring hover:ring-gray-500 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  data-testid="cart-remove-btm"
                  className="text-sm text-red-600 cursor-pointer z-40"
                  onClick={(e) => {
                    e.preventDefault();
                    removeFromCart(item.id, item.color, item.storage);
                  }}
                >
                  {STRINGS.buttons.remove.toUpperCase()}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 min-w-sm w-full px-5 md:px-[6.25rem] py-4 bg-white shadow-md z-50 text-xs">
        {/* Mobile layout */}
        <div className="flex flex-col gap-4 sm:hidden">
          {totalPrice > 0 && (
            <div className="flex justify-between">
              <p>{STRINGS.pages.cart.total.toUpperCase()}</p>
              <p>
                {totalPrice} {STRINGS.currency.name}
              </p>
            </div>
          )}

          <div className="flex justify-between gap-4">
            <Link
              to="/"
              data-testid="cart-continue-shopping-btm"
              className="flex-1 px-3 py-3 ring ring-black bg-white hover:ring-2 transition text-center"
            >
              {STRINGS.buttons.continueShopping.toUpperCase()}
            </Link>
            <button
              disabled={totalPrice <= 0}
              className="flex-1 px-3 py-3 border border-black bg-black text-white hover:bg-gray-400 hover:border-gray-400 disabled:bg-gray-400 disabled:border-gray-400 transition-all"
            >
              {STRINGS.buttons.pay.toUpperCase()}
            </button>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:flex justify-between items-center">
          <Link
            to="/"
            data-testid="cart-continue-shopping-btm"
            className="px-3 py-3 ring ring-black bg-white w-42 hover:ring-2 transition text-center"
          >
            {STRINGS.buttons.continueShopping.toUpperCase()}
          </Link>

          <div className="flex items-center gap-12">
            {totalPrice > 0 && (
              <div className="flex items-center space-x-4 min-w-28">
                <p className="w-1/3">
                  {STRINGS.pages.cart.total.toUpperCase()}
                </p>
                <p className="w-2/3">
                  {totalPrice} {STRINGS.currency.name}
                </p>
              </div>
            )}
            <button
              disabled={totalPrice <= 0}
              className="px-3 py-3 border border-black bg-black text-white w-42 hover:bg-gray-400 hover:border-gray-400 disabled:bg-gray-400 disabled:border-gray-400 transition-all"
            >
              {STRINGS.buttons.pay.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
