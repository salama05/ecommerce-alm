import { BrowserRouter, Route, Routes } from "react-router-dom";
import FlashSaleSection from "./components/ProductSection";
import { dataList } from "./data/Data";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
function App() {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
          {/* <Route path=":article" element={<Article />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;

