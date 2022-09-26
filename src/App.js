import React, {  useEffect } from "react";

function App() {
  useEffect(
    // side effect function
    () => {
      console.log("useEffect called");
    }
  );

  console.log("Component rendering");

  return (
    <div>
      <button>Click Me</button>
      <input type="text" placeholder="Type away..." />
    </div>
  )
}

export default App;
