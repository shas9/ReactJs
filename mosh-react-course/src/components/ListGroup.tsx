import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New york", "San Francisco", "Tokyo", "Rajshahi", "London"];

  const getMessage = () => {
    return items.length === 0 && <p>No item found</p>;
  };

  //Event handler
  const handleCLick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleCLick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
