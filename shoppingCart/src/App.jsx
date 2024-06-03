import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  const [products, setProducts] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
      <Footer />
    </div>
  );
}

export default App;
