import "./App.css";
import Counter from "./components/Counter/Counter";
import Job from "./components/Job/Job";
import Map from "./components/Map/Map";

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
    </>
  );
}

export default App;
