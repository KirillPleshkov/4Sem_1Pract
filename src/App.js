import React from "react";
import Circle from "./components/UI/circle/Circle";
import Game from "./components/Game";
function App() {
  return (
    <div className="App">
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Game/>
        </div>
    </div>
  );
}

export default App;
