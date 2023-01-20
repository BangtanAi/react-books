import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="container">
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
