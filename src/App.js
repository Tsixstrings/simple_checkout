import "./App.css";
import Layout from "./layout/layout";
import ProductsBox from "./components/ProductsBox";
import CheckoutBox from "./components/CheckoutBox";

function App() {
  return (
    <Layout>
      <ProductsBox />
      <CheckoutBox />
    </Layout>
  );
}

export default App;
