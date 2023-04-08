import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [pizza, setPizza] = useState({
    id: 1,
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    const toppingsArray = pizza.toppings;
    toppingsArray.push("Cheese");
    setPizza({ ...pizza, toppings: toppingsArray });
  };
  return (
    <div>
      <h1>{pizza.toppings.length}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
