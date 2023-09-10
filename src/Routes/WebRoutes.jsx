import { BrowserRouter, Route, Routes } from "react-router-dom"
import Productpage from '../pages/product/Productpage'
import ProductInfo from '../pages/productDeatils/ProductInfo'
import Navbar from "../common/Navbar"

const WebRoutes = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Productpage/>}/>
            <Route path="/:id" element={<ProductInfo/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default WebRoutes