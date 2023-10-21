import { useState } from "react"


function App() {

  const [color, setColor] = useState("olive");

  function changeColorRed(){
    setColor("red");
  }

  function changeColorBlue(){
    setColor("blue");
  }

  function changeColorGreen(){
    setColor("green");
  }

  function changeColorYellow(){
    setColor("yellow");
  }

  function changeColorPink(){
    setColor("pink");
  }

  return (

    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }} onClick={changeColorRed}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }} onClick={changeColorBlue}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }} onClick={changeColorGreen}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black" style={{ backgroundColor: "Yellow" }} onClick={changeColorYellow}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black" style={{ backgroundColor: "pink" }} onClick={changeColorPink}>Pink</button>

        </div>
      </div>
    </div>

  )
}

export default App
