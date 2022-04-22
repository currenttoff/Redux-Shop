import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./container/Header";
import ProductListing from "./container/ProductListing";
import ProductDetail from "./container/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<ProductListing></ProductListing>}></Route>
        <Route
          path="/product/:productId"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route>404 Not Found</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
