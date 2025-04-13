import { Link, useLocation } from "react-router-dom";
import { PATHS, STRINGS } from "../constants";
import { useCart } from "../context/CartContext";

const Header = () => {
  const location = useLocation();
  const { cartCount } = useCart();

  const isCartPage = location.pathname === "/cart";

  return (
    <div className="w-full flex justify-between py-6 px-5 md:px-[6.25rem] sticky top-0 z-50 bg-white">
      <Link to="/">
        <img
          src="/assets/logo.svg"
          alt={STRINGS.altText.logo}
          className="size-max h-6"
        />
      </Link>

      {!isCartPage && (
        <Link to={PATHS.cart} className="flex items-center gap-1">
          <img
            src="/assets/cart.svg"
            alt={STRINGS.altText.cart}
            className="size-max h-5"
          />
          <p>{cartCount}</p>
        </Link>
      )}
    </div>
  );
};

export default Header;
