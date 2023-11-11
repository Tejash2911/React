import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCom from "../components/User/UserCom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserCom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
