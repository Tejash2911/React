import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./Router/Router";

function App() {
  return (
    <>
      <Router />
      <ToastContainer />
    </>
  );
}

export default App;
