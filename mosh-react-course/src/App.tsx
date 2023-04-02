import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New york", "San Francisco", "Tokyo", "Rajshahi", "London"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
