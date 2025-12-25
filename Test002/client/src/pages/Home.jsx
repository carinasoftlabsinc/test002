import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands, mockBrandProducts } from "../components/GenInfo";

const Home = () => {
  const navigate = useNavigate();
  // Convert mockBrandProducts object to array
  const bestSellersProducts = Object.values(mockBrandProducts);

  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto ">
      <Carousel />
      <GenInfo />
      <Brands />
      <div className="flex flex-col items-center my-16 w-full">
        <p className="prose prose-2xl font-bold mb-6">Best Sellers</p>
        <div className="flex flex-wrap justify-center">
          {bestSellersProducts.map((product) => (
            <div
              key={product._id}
              className="relative w-[340px] h-[340px] mx-2 mb-6 hover:text-white"
            >
              <div className="absolute w-full flex justify-center items-center top-4">
                <p className="logo font-semibold z-50">{product.brand}</p>
              </div>
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => navigate(`/product-details/${product._id}`)}
                className="absolute inset-0 flex items-center justify-center
                             bg-gray-800 text-white opacity-0 hover:opacity-80 transition-opacity duration-200"
              >
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-full md:max-w-full xs:mx-2  sm:mx-auto ">
        <div className="prose prose-2xl">
          <ShopBy title="Top Rated" filter="topRated" />
        </div>
      </div>
    </div>
  );
};

export default Home;
