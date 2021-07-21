import React from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//import the bootstrap and uuid module
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
const [items, setItems] = React.useState([]);
const [item, setItem] = React.useState("");
const [id, setId] = React.useState(uuid());
const [editedItem, seteditedItem] = React.useState(false);

const App = () => {
  const handleChange = e => {
    setItem(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: id,
      item: item
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setItem("");
    setId(uuid());
    seteditedItem(false);
  };

  const clearList = () => {
    setItems([]);
  };

  const handleDelete = id => {
    const filteredList = items.filter(item => item.id !== id);
    updatedItems(filteredList);
  };

  const handleEdit = id => {
    const filteredList = items.filter(item => item.id !== id);

    const selectedItem = items.find(item => item.id === id);
    setItems(filteredList);
    setItem(selectedItem.item);
    setId(id);
    seteditedItem(true);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Simple Todo</h3>
          <TodoInput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={editItem}
          />
          <TodoList
            items={items}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
