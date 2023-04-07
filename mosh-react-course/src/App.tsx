import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Dhaka", "Rajshahi", "Ctg"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="Bangladesh"
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  );
}

export default App;
