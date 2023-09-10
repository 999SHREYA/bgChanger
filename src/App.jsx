
import { useState } from 'react'
import './App.css'

function App() {
const [color, setColor] = useState("black")
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center top-11 left-3/4 inset-x-0 px-2">
          <div className="  gap-3 shadow-sm bg-white rounded-sm">
            <button onClick={() => setColor("red")}>Red</button>
            <br />
            <button onClick={() => setColor("Green")}>Green</button>
            <br />
            <button onClick={() => setColor("blue")}>blue</button>
            <br />
            <button onClick={() => setColor("white")}>white</button>
            <br />
            <button onClick={() => setColor("yellow")}>yellow</button>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
