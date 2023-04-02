function ListGroup() {
  let items = ["New york", "San Francisco", "Tokyo", "Rajshahi", "London"];
  items = [];

  const getMessage = () => {
    return items.length === 0 && <p>No item found</p>;
  };
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
