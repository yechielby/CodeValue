import { useEffect, useState } from "react";

// import "./ProductEdit.css";

function ProductEdit({ product, onSave, onDelete }) {
  const [obj, setObj] = useState(null);

  useEffect(() => {
    setObj({ ...product });
  }, [product]);

  function handleNameChange(e) {
    const value = e.target.value;
    if (value.length > 1) {
      setObj({ ...obj, name: value });
    }
  }
  function handleDescriptionChange(e) {
    const value = e.target.value;
    if (value.length > 1) {
      setObj({ ...obj, description: value });
    }
  }
  function handlePriceChange(e) {
    const value = +e.target.value;
    console.log(typeof value);
    if (value > 0) {
      setObj({ ...obj, price: value });
    }
  }

  if (!obj) return <></>;
  return (
    <div className="product-edit">
      <div>
        <label>
          Name:
          <input type="text" value={obj.name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            value={obj.description}
            onChange={handleDescriptionChange}
          />
        </label>
        <div>
          <label>
            Price:
            <input
              type="number"
              min="0"
              value={obj.price}
              onChange={handlePriceChange}
            />
          </label>
        </div>
      </div>
      <button onClick={() => onSave(obj)}>Save</button>
      <button onClick={() => onDelete(obj.id)}>Delete</button>
    </div>
  );
}

export default ProductEdit;
