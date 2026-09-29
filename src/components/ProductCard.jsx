import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <span>{product.emoji}</span>
      </div>

      <div className="product-content">
        <span className="category">{product.category}</span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>

          <button onClick={addToCart}>
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;