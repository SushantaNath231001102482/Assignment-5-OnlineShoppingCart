import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-icon">
        {item.emoji}
      </div>

      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>₹{item.price.toLocaleString("en-IN")}</p>

        <div className="quantity-controls">
          <button
            onClick={() =>
              dispatch({
                type: "DECREASE_QUANTITY",
                payload: item.id,
              })
            }
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch({
                type: "INCREASE_QUANTITY",
                payload: item.id,
              })
            }
          >
            +
          </button>
        </div>
      </div>

      <div className="cart-item-right">
        <strong>
          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
        </strong>

        <button
          className="remove-btn"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: item.id,
            })
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;