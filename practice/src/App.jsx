import "./App.css";
import Job from "./components/Job/Job";

function App() {
  return (
    <>
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
      <hr />
    </>
  );
}

export default App;
