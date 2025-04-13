import { Link } from "react-router-dom";
import { Phone } from "../types/phone";
import { STRINGS } from "../constants";
import "./ggg.css";

interface PhoneGridProps {
  phones: Phone[];
}

const PhoneGrid = ({ phones }: PhoneGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-[0.85px]">
      {phones.map((phone, index) => (
        <div key={`${phone.id}-${index}`} className="bg-white ring">
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
