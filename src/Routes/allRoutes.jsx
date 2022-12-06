import { Routes, Route } from "react-router-dom";

import { Main } from "../Main/main";
import { Womens } from "../Pages/womens";
import { Mens } from "../Pages/mens";
import { OtherProduct } from "../Pages/everythingElse";
import { Login } from "../Pages/login";
import { Cart } from "../Pages/cart";
import { Signup } from "../Pages/signup";
import { Checkout } from "../Pages/checkout";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/mens" element={<Mens />}></Route>
      <Route path="/womens" element={<Womens />}></Route>
      <Route path="/everything-else" element={<OtherProduct />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  );
}

export { AllRoutes };
