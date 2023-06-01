// react
import { useEffect, useState } from "react";
// react-router-dom
import { Link, useParams } from "react-router-dom";
// types
import { ProductDetails } from "../types";
// icons
import { ArrowLeft, RatingStar } from "../icons";

function Product() {
  // router
  const { id } = useParams();
  // local states
  const [product, setProduct] = useState<ProductDetails | null>(null);

  useEffect(() => {
    if (id) {
      fetch("https://fakestoreapi.com/products/" + id)
        .then((res) => res.json())
        .then((json) => setProduct(json));
    }
  }, []);

  return (
    <div>
      {product ? (
        <section className="text-gray-600 body-font overflow-hidden">
          <Link to="/" className="flex items-center px-6 py-4 mx-1 text-bold">
            <span>
              <ArrowLeft />
            </span>
            <span className="pl-2 pb-1">Back</span>
          </Link>
          <div className="container px-5 py-6 sm:py-12 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt={product.title}
                className="lg:w-1/2 w-full lg:h-96 h-64 object-contain object-center rounded"
                src={product.image}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                  {product.category}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center space-x-px">
                    <span className="text-sm font-semibold pr-1">
                      {product.rating.rate}
                    </span>
                    <span className="flex pr-2">
                      {[1, 2, 3, 4, 5].map((e) => (
                        <RatingStar
                          key={e}
                          fill={e <= Math.round(product.rating.rate)}
                          clasName="!w-5 !h-5"
                        />
                      ))}
                    </span>
                    <span className="text-gray-600">
                      {product.rating.count} Reviews
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex pt-6">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product.price}
                  </span>
                  <button className="ml-auto rounded-md bg-[#ff473e] px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-[#fd645c]">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex pt-10 justify-center items-center text-xl">
          Loading! Plese wait...
        </div>
      )}
    </div>
  );
}

export default Product;
