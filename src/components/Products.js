import { useEffect, useState } from "react";
import Product from "./Product";
import Spinner from "./Spinner";

import ProductEdit from "./ProductEdit";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const products = data.map((p) => ({
          id: p.id,
          name: p.title,
          description: p.description,
          price: p.price,
          image: p.image,
        }));
        setProducts(products);
      });
  }, []);

  function handleChange(e) {
    setQuery(e.target.value.toLowerCase());
  }
  function handleProductSelected(product) {
    // console.log(product);
    setProductSelected(JSON.stringify(product));
  }

  return (
    <>
      {productSelected}
      <div className="search">
        <label for="search">Search: </label>
        <input type="search" id="search" onChange={handleChange}></input>
      </div>
      <section className="products">
        {!products.length && <Spinner />}
        {products
          .filter(
            (p) =>
              p.name.toLowerCase().includes(query) ||
              p.description.toLowerCase().includes(query),
          )
          .map((product) => (
            <Product
              key={product.id}
              product={product}
              onSelected={handleProductSelected}
            />
          ))}
      </section>
      {productSelected && <ProductEdit product={JSON.parse(productSelected)} />}
    </>
  );
}

export default Products;
