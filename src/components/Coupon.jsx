import { useState } from "react";
import { useCart } from "../context/CartContext";

const coupons = {
  SAVE10: 10,
  SAVE20: 20,
  WELCOME15: 15,
};

function Coupon() {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const { coupon, dispatch } = useCart();

  const applyCoupon = () => {
    const enteredCode = code.trim().toUpperCase();

    if (coupons[enteredCode]) {
      dispatch({
        type: "APPLY_COUPON",
        payload: {
          code: enteredCode,
          discount: coupons[enteredCode],
        },
      });

      setMessage(`${coupons[enteredCode]}% discount applied!`);
      setCode("");
    } else {
      setMessage("Invalid coupon code.");
    }
  };

  const removeCoupon = () => {
    dispatch({
      type: "REMOVE_COUPON",
    });

    setMessage("");
  };

  return (
    <div className="coupon-box">
      <div className="coupon-title">
        <span>🎟️</span>
        <div>
          <h3>Have a coupon?</h3>
          <p>Apply a code to save on your order</p>
        </div>
      </div>

      {coupon ? (
        <div className="applied-coupon">
          <span>
            {coupon.code} • {coupon.discount}% OFF
          </span>

          <button onClick={removeCoupon}>
            Remove
          </button>
        </div>
      ) : (
        <div className="coupon-input">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button onClick={applyCoupon}>
            Apply
          </button>
        </div>
      )}

      {message && (
        <p
          className={
            message.includes("Invalid")
              ? "coupon-error"
              : "coupon-success"
          }
        >
          {message}
        </p>
      )}

      <div className="coupon-hints">
        Try: <strong>SAVE10</strong> · <strong>SAVE20</strong> ·{" "}
        <strong>WELCOME15</strong>
      </div>
    </div>
  );
}

export default Coupon;