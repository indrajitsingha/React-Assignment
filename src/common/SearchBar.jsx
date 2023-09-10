import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetBrands,
  GetFilterbyCateandBrands,
  ResetSearch,
  SearchData,
} from "../Redux/slice/ProductSlice";

const SearchBar = () => {
  const { products, uniqueCategory, Barnds, filterData } = useSelector(
    (state) => state.productslice
  );
  const Dispatch = useDispatch();
  const [Search, setSearch] = useState("");
  const [Category, setCategory] = useState("");
  const [Brand, setBrand] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
    Dispatch(GetBrands(e.target.value));
  };
  const Submit = (e) => {
    e.preventDefault();
    console.log(Search, );
    if(Search){
      Dispatch(SearchData(Search));
    }
    if(Category && Brand){
      Dispatch(GetFilterbyCateandBrands({ category: Category, brand: Brand }));

    }
  };
  return (
    <div className=" w-[100%] max-w-[100%]">
      <div className="flex flex-col justify-center items-center my-5 ">
        <div className="rounded-xl sm:w-[90%] border border-gray-200 bg-white p-6 shadow-md">
          <form className="" onSubmit={Submit}>
            <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
              <svg
                className="absolute left-2 block h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" className=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
              </svg>
              <input
                type="name"
                name="search"
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Search by Product name"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-stone-600">
                  Category
                </label>

                <select
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  {uniqueCategory &&
                    uniqueCategory.map((pro) => (
                      <option key={pro} value={pro}>
                        {pro}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label
                  for="status"
                  className="text-sm font-medium text-stone-600"
                >
                  Brands
                </label>

                <select
                  onChange={(e) => setBrand(e.target.value)}
                  className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  {Barnds &&
                    Barnds.map((pro) => (
                      <option key={pro.id} value={pro.brand}>
                        {pro?.brand}
                      </option>
                    ))}
                </select>
              </div>

              {/* <div className="flex flex-col">
                <label
                  for="status"
                  className="text-sm font-medium text-stone-600"
                >
                  Rating
                </label>

                <select className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                  <option>Dispached Out</option>
                  <option>In Warehouse</option>
                  <option>Being Brought In</option>
                </select>
              </div> */}
            </div>

            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              {filterData.length > 0 ? (
                <button
                  onClick={() => Dispatch(ResetSearch())}
                  className="rounded-lg  bg-[crimson] px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring"
                >
                  Reset
                </button>
              ) : (
                ""
              )}

              <button
                type="submit"
                className="rounded-lg bg-[crimson] px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring-[crimson]"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
