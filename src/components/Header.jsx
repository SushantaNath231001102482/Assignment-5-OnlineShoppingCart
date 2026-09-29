import { useCart } from "../context/CartContext";

function Header() {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <div className="brand-icon">🛍️</div>

          <div>
            <h1>ShopEase</h1>
            <p>Simple shopping, smarter checkout</p>
          </div>
        </div>

        <div className="cart-badge">
          🛒
          <span>{cartCount}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;