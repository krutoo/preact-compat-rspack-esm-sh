import "preact/debug";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";

function App() {
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <>
      <h1>Hello, world!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, id.</p>
    </>
  );
}

const element = document.createElement("div");

document.body.append(element);

createRoot(element).render(<App />);
