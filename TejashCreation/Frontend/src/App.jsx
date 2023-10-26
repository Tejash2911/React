import { BrowserRouter, Outlet, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./ui/pages/Home";
import Login from "./ui/pages/Login";
import SignUp from "./ui/pages/SignUp";
import ForgotPassword from "./ui/pages/ForgotPassword";
import OrdersPage from "./ui/pages/OrderPage";
import ProductList from "./ui/pages/ProductList";
import CartPage from "./ui/pages/CartPage";
import ProductPage from "./ui/pages/ProductPage";
import GetUserAddress from "./ui/components/GetUserAddress";
// import BackToTopBTN from "./ui/components/BackToTopBTN";
import MessageComponent from "./ui/components/MessageComponent";
import { useSelector } from "react-redux";

const IsNotLogin = () => {
  //users can only access this routes if they are not logedin
  const user = useSelector((state) => state.user?.currentUser);
  return !user ? <Outlet /> : <Navigate to={-1} />; //-1 means redirect to prev page
};
const IsLogin = () => {
  //only Loged in users can access this
  const user = useSelector((state) => state.user?.currentUser);
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<IsNotLogin />}>
            <Route exact path="/login" element={<Login title="Login" />} />
            <Route exact path="/signup" element={<SignUp title="SignUp" />} />
            <Route path="/forgotpassword" element={<ForgotPassword title="Forgot Password" />} />
          </Route>

          <Route element={<IsLogin />}>
            <Route exact path="/orders" element={<OrdersPage title="Orders" />} />
            <Route exact path="/cart" element={<CartPage title="Cart" />} />
          </Route>

          <Route exact path="/" element={<Home title="Home" />} />
          <Route path="/products/:category" element={<ProductList title="Products" />} />
          <Route path="/product/:id" element={<ProductPage title="Product" />} />
          <Route exact path="/address" element={<GetUserAddress />} />
        </Routes>
        <MessageComponent />
        {/* <BackToTopBTN /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
