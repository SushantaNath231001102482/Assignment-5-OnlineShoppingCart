import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />

        <main className="main-content">
          <div className="shop-layout">
            <ProductList />

            <Cart />
          </div>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;