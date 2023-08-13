import "./App.css";
import ColorInput from "./components/ColorInput/ColorInput";
import Counter from "./components/Counter/Counter";
import Crud from "./components/Crud/Crud";
import InputChange from "./components/InputChange/InputChange";
import Job from "./components/Job/Job";
import Map from "./components/Map/Map";
import ShowHide from "./components/ShowHide/ShowHide";

function App() {
  return (
    <>
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
      <hr />
      <Map />
      <hr />
      <Counter />
      <hr />
      <InputChange />
      <hr />
      <ShowHide />
      <hr />
      <Crud />
      <hr />
      <ColorInput />
      <hr />
    </>
  );
}

export default App;
