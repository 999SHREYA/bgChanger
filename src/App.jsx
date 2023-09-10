
import { useState } from 'react'
import './App.css'

function App() {
const [color, setColor] = useState("black")
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="">
          <div className="">
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("Green")}>Green</button>
            <button onClick={() => setColor("blue")}>blue</button>
            <button onClick={() => setColor("white")}>white</button>
            <button onClick={() => setColor("yellow")}>yellow</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
