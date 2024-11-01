import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="h-full flex justify-center items-end mb-2"
        style={{ backgroundColor: color }}
      >
        <div className="bg-slate-300 h-16 w-auto flex justify-center gap-4 items-center p-3 rounded-lg">
          <button
            className="h-8 text-white w-16 rounded-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="h-8 text-white w-16 rounded-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="h-8 text-white w-16 rounded-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="h-8 text-white w-16 rounded-lg"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Blue
          </button>
          <button
            className="h-8 text-white w-16 rounded-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
