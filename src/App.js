import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import OurWork from "./pages/OurWork";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/pricing" exact element={<PricingPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/our-work" exact element={<OurWork />} />
        <Route path="/checkout" exact element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
