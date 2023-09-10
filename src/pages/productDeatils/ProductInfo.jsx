import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../common/ProductCard";
import { GetRelatedProducts } from "../../Redux/slice/ProductSlice";

const ProductInfo = () => {
  const { id } = useParams();
  const { Related } = useSelector((state) => state.productslice);

  const [Data, setData] = useState({});
  const Dispatch = useDispatch();

  const getInfo = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setData(response.data);
    Dispatch(GetRelatedProducts(response.data.category));
  };
  useEffect(() => {
    getInfo();
  }, [id]);
  return (
    <div className="">
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-10 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-[500px] h-64 object-contain object-center rounded"
              src={Data?.thumbnail}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {Data?.brand}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {Data?.title}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">{Data?.rating} Rating</span>
                  <span class="text-gray-700 text-lg ml-3">in Stock : {Data?.stock} left </span>
                </span>
              </div>
              <p class="leading-relaxed">
                {Data?.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Sunt officia dicta reprehenderit, incidunt
                omnis esse sequi distinctio a illo totam?
              </p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex">
                  <span class="text-gray-600 text-xl font-semibold  ml-3">
                    {Data?.category}
                  </span>
                </div>
                <div class="flex ml-6 items-center">
                  <span class="text-white rounded bg-purple-800 p-2 text-xl font-semibold  ml-3">
                    {Data?.discountPercentage} % Discount
                  </span>
                </div>
                
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                $ {Data?.price}
                </span>
                <button class="flex ml-auto text-white font-semibold bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to Cart
                </button>
                <button class="rounded-full w-10 h-10 bg-black p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4"
                    viewBox="0 0 24 24"
                    className=" text-white"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Related Product</h1>
      </div>
      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-5 mt-10 mb-5">
        {Related &&
          Related.map((pro, index) => {
            if (index < 4) {
              return <ProductCard key={pro.id} product={pro} />;
            }
          })}
      </div>
    </div>
  );
};

export default ProductInfo;
