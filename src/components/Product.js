import "./Product.css";

function Product({ product, onSelected }) {
  function handleSelected(e) {
    onSelected(product);
  }
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          title={product.description}
        />
      </div>

      <div className="product-info">
        <h5>{product.name}</h5>
        <h6>${product.price.toFixed(2)}</h6>
      </div>
      <button onClick={handleSelected}>Edit</button>
    </div>
  );
}

export default Product;
