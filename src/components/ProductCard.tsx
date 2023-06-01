// react router dom
import { Link } from "react-router-dom";
import { RatingStar } from "../icons";
// types
import { ProductDetails } from "../types";

interface IProps {
  product: ProductDetails;
}

function ProductCard({ product }: IProps) {
  return (
    <Link to={`/product/${product.id}`}>
      <div
        key={product.id}
        className="relative overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm group"
      >
        <div className="relative ">
          <div className="aspect-w-1 aspect-h-1">
            <img
              className="object-contain w-full h-52 p-4"
              src={product.image}
              alt="No Image found"
            />
          </div>
          <div className="px-6 py-4 w-full flex-1 flex flex-col overflow-hidden whitespace-nowrap">
            <p className="text-xs block font-medium text-gray-500 uppercase overflow-hidden text-ellipsis">
              {product.category}
            </p>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              {product.title}
            </h3>
            <div className="flex items-center mt-2.5">
              <div className="flex items-center space-x-px">
                <span className="text-xs font-semibold pr-1">
                  {product.rating.rate}
                </span>
                {[1, 2, 3, 4, 5].map((e) => (
                  <RatingStar
                    key={e}
                    fill={e <= Math.round(product.rating.rate)}
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-500 ml-1.5">
                ({product.rating.count})
              </p>
            </div>
            <p className="mt-5 text-sm font-bold text-gray-900">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
