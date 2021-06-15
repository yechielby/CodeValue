import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductEdit from "./components/ProductEdit";

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <ProductEdit />
    </div>
  );
}

export default App;
