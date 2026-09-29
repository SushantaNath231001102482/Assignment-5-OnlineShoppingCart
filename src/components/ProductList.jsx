import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <section className="products-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">OUR COLLECTION</span>
          <h2>Featured Products</h2>
        </div>

        <span className="product-count">
          {products.length} Products
        </span>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;