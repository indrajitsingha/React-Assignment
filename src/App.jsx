import { useEffect } from "react";
import WebRoutes from "./Routes/WebRoutes";
import { useDispatch } from "react-redux";
import { getProducts, getUniqueCategory } from "./Redux/slice/ProductSlice";

const App = () => {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(getProducts()).then(() => Dispatch(getUniqueCategory()));
  });
  return <WebRoutes />;
};

export default App;
