import React from "react";
import ListGroup from "./components/ListGroup";

const App: React.FC = () => {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
};

export default App;
