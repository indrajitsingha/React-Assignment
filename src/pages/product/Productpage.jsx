import { useSelector } from "react-redux";
import ProductCard from "../../common/ProductCard";
import SearchBar from "../../common/SearchBar";



const Productpage = () => {
  const {products,filterData}=useSelector((state)=>state.productslice)
  return (
    <div className="">
      {/* <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">Our Product</h1>
      </div> */}
      <SearchBar />

      <div
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-5 mt-10 mb-5"
      >

      {
        filterData.length>0?
        filterData && filterData.map((pro)=> <ProductCard key={pro.id} product={pro} />)
        :
        products && products.map((pro)=> <ProductCard key={pro.id} product={pro} />)
      }
    
      </div>
    </div>
  );
};

export default Productpage;
