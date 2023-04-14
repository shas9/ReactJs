import { useEffect, useRef, useState } from "react";
import ProductList from "./expense-tracker/components/ProductList";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState("");

  //afterRender
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App;
