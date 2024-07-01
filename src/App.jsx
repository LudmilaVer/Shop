import { useState } from "react";
import Cart from "./components/Cart";
import ProductsList from "./components/ProductsList";
import "./styles.css";
import { useEffect } from "react";

const API_URL = "https://66728a846ca902ae11b0a98c.mockapi.io/goods";

export default function App() {
  const [items, setItems] = useState([]);

  async function fetchItems() {
    try {
      const response = await fetch(API_URL);
      const json = await response.json();
      setItems(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="App">
      <ProductsList items={items} />
      <Cart />
    </div>
  );
}
