import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import AddItem from "./AddItem";
import Search from "./Search";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("list")));
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const setAndSaveItem = (listItem) => {
    setItems(listItem);
    localStorage.setItem("list", JSON.stringify(listItem));
  };
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItem = [...items, myNewItem];
    setAndSaveItem(listItem);
  };
  const handleCheck = (id) => {
    const listItem = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );
    setAndSaveItem(listItem);
  };
  const handleDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setAndSaveItem(listItem);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div className="App">
      <Header title="Groceries list" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
