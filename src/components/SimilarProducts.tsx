import { Link } from "react-router-dom";
import { STRINGS } from "../constants";

type SimilarProduct = {
  id: string;
  name: string;
  brand: string;
  basePrice: number;
  imageUrl: string;
};

interface SimilarProductsProps {
  products: SimilarProduct[];
}

const SimilarProducts = ({ products }: SimilarProductsProps) => {
  return (
    <div className="mt-16 pl-5 xl:pl-[11rem] 2xl:pl-[22rem]">
      <h2 className="text-lg mb-6 font-light">
        {STRINGS.pages.productDetails.similarItems.toUpperCase()}
      </h2>

      <div className="flex overflow-x-auto pb-2">
        {products.map((product, index) => (
          <Link
            key={`${product.id}-${index}`}
            to={`/product/${product.id}`}
            className="min-w-[320px] h-80 bg-white p-4 flex flex-col items-center justify-between border border-gray-500"
          >
            <div className="w-full h-[250px] flex justify-center items-center">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-60 h-60 object-contain"
              />
            </div>

            <div className="flex justify-between items-end w-full">
              <div>
                <p className="text-[10px] font-light text-gray-500 tracking-tighter">
                  {product.brand.toUpperCase()}
                </p>
                <p className="text-xs font-light tracking-tighter">
                  {product.name.toUpperCase()}
                </p>
              </div>
              <p className="text-xs font-light tracking-tighter whitespace-nowrap">
                {product.basePrice} €
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
