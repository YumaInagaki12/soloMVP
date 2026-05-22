import "./App.css";
import { useEffect, useState } from "react";
import { Testfunc } from "./Testfunc";

function App() {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch("/top")
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <>
      <div className="App">Message from the backend: {message}</div>;
      <Testfunc />;
    </>
  );
}

export default App;
