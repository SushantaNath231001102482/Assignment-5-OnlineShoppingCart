import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import Coupon from "./Coupon";

function Cart() {
  const {
    cart,
    subtotal,
    discount,
    gst,
    grandTotal,
    dispatch,
  } = useCart();

  return (
    <aside className="cart-section">
      <div className="cart-header">
        <div>
          <span className="eyebrow">YOUR ORDER</span>
          <h2>Shopping Cart</h2>
        </div>

        {cart.length > 0 && (
          <button
            className="clear-btn"
            onClick={() =>
              dispatch({ type: "CLEAR_CART" })
            }
          >
            Clear
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>

          <h3>Your cart is empty</h3>

          <p>
            Add some products to see them here.
          </p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>

          <Coupon />

          <div className="price-summary">
            <div>
              <span>Subtotal</span>
              <strong>₹{subtotal.toFixed(2)}</strong>
            </div>

            <div>
              <span>Discount</span>
              <strong className="discount">
                − ₹{discount.toFixed(2)}
              </strong>
            </div>

            <div>
              <span>GST (18%)</span>
              <strong>₹{gst.toFixed(2)}</strong>
            </div>

            <div className="total-row">
              <span>Grand Total</span>
              <strong>₹{grandTotal.toFixed(2)}</strong>
            </div>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout →
          </button>
        </>
      )}
    </aside>
  );
}

export default Cart;