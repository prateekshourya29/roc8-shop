// react
import { useEffect } from "react";
// recoil
import { useRecoilState } from "recoil";
import { ProductCard } from "../components";
import * as recoilAtoms from "../recoil";

function Home() {
  // recoil states
  const [products, setProducts] = useRecoilState(recoilAtoms.productsAtom);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  console.log("===", products);

  return (
    <div>
      {products?.length > 0 ? (
        <section className="py-2 sm:py-4 bg-gray-50">
          <div className="px-4 mx-auto sm:px-6 lg:px-16">
            {/* Products */}
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:mt-8">
              {products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
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

export default Home;
