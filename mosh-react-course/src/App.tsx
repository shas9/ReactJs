import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button color="success" onClick={() => console.log("Clicked the button")}>
        Press me please
      </Button>
    </div>
  );
}

export default App;
