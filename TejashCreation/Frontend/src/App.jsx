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
import ResetPassword from "./ui/pages/ResetPassword";
import PaymentSuccess from "./ui/pages/PaymentSuccess";
import MessageComponent from "./ui/components/MessageComponent";
import BackToTopBTN from "./ui/components/BackToTopBTN";
import { useSelector } from "react-redux";
import ScrollToTop from "./ui/components/ScrollToTop";
import UserSettings from "./ui/pages/UserSettings";

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
        <ScrollToTop />
        <Routes>
          <Route element={<IsNotLogin />}>
            <Route exact path="/login" element={<Login title="Login" />} />
            <Route exact path="/signup" element={<SignUp title="SignUp" />} />
            <Route exact path="/forgotpassword" element={<ForgotPassword title="Forgot Password" />} />
            <Route exact path="/resetpassword/:token" element={<ResetPassword title="ReseetPassword" />} />
          </Route>

          <Route element={<IsLogin />}>
            <Route exact path="/orders" element={<OrdersPage title="Orders" />} />
            <Route exact path="/cart" element={<CartPage title="Cart" />} />
            <Route exact path="/paymentSuccess" element={<PaymentSuccess title="PaymentSuccess" />} />
            <Route exact path="/setting" element={<UserSettings />} />
          </Route>

          <Route exact path="/" element={<Home title="Home" />} />
          <Route exact path="/products/:category" element={<ProductList title="Products" />} />
          <Route exact path="/product/:id" element={<ProductPage title="Product" />} />
          <Route exact path="/address" element={<GetUserAddress />} />
        </Routes>
        <MessageComponent />
        <BackToTopBTN />
      </BrowserRouter>
    </>
  );
}

export default App;
