import { Link } from "react-router-dom";
import { Phone } from "../types/phone";
import { STRINGS } from "../constants";

interface PhoneGridProps {
  phones: Phone[];
}

const PhoneGrid = ({ phones }: PhoneGridProps) => {
  return (
    <div
      data-testid="phone-grid"
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 w-full border-t border-l "
    >
      {phones.map((phone, index) => (
        <div
          key={`${phone.id}-${index}`}
          className="border-b border-r  bg-white"
        >
          <Link
            to={`/product/${phone.id}`}
            className="h-80 p-4 flex flex-col items-center justify-between"
          >
            <div className="w-full h-[250px] flex justify-center items-center">
              <img
                src={phone.imageUrl}
                alt={phone.name}
                className="w-60 h-60 object-contain"
              />
            </div>

            <div className="flex justify-between items-end w-full">
              <div>
                <p className="text-[10px] font-light text-gray-500 tracking-tighter">
                  {phone.brand.toUpperCase()}
                </p>
                <p className="text-xs font-light tracking-tighter">
                  {phone.name.toUpperCase()}
                </p>
              </div>
              <p className="text-xs font-light tracking-tighter">
                {phone.basePrice} {STRINGS.currency.symbol}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PhoneGrid;
