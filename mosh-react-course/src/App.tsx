import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const handleOnClick = () => {
    setShowAlert(true);
  };

  const handleOnClose = () => {
    setShowAlert(false);
  };
  return (
    <div>
      {showAlert && (
        <Alert onClose={handleOnClose}>
          Hello <span>World</span>
        </Alert>
      )}
      <Button color="success" onClick={handleOnClick}>
        Press me please
      </Button>
    </div>
  );
}

export default App;
