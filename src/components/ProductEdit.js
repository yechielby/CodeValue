import { useEffect, useState } from "react";

// import "./ProductEdit.css";

function ProductEdit({ product }) {
  const [obj, setObj] = useState([]);

  useEffect(() => {
    setObj(product);
  }, [product]);

  function handleNameChange(e) {
    const value = e.target.value;
    if (value.length > 1) {
      //   setObj((obj.name = value));
    }
  }
  function handleDescriptionChange(e) {
    const value = e.target.value;
    if (value.length > 1) {
      //   setObj((obj.description = value));
    }
  }
  function handlePriceChange(e) {
    const value = e.target.value;
    if (value > 0) {
      setObj((obj.price = value));
    }
  }
  function onSave() {}

  if (!product) return <></>;
  return (
    <div className="product-edit">
      <div>
        <label>
          Name:
          <input type="text" value={product.name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            value={product.description}
            onChange={handleDescriptionChange}
          />
        </label>
        <div>
          <label>
            Price:
            <input
              type="number"
              min="0"
              value={product.price}
              onChange={handlePriceChange}
            />
          </label>
        </div>
      </div>
      <button onclick={onSave}>Save</button>
    </div>
  );
}

export default ProductEdit;
