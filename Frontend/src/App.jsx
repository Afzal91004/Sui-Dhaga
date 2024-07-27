import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  Contact,
  Cart,
  Checkout,
  OrderConfirmation,
} from "./pages/index";
import { Header, Footer } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
