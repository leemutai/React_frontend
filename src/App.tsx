import React from "react"; // Importing React is necessary for JSX
import Message from "./Message"; // Importing the Message component using a relative path

function App() {
  return (
    <div>
      {/* Rendering the Message component */}
      <Message />
    </div>
  );
}

export default App;
