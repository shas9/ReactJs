import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Hasnaine" } });
  };
  return (
    <div>
      <h1>{game.player.name}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
