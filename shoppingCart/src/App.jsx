import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Header } from "./components/Header";
import { useState } from "react";


function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(null);

  return (
    <div>
      <Header cart={cart} />
      <div className=" dark:bg-darkbg">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cart={cart}
                setCart={setCart}
                products={products}
                setProducts={setProducts}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
                products={products}
                setProducts={setProducts}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
