import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import NavBar from "./Components/UIPages/NavBar";
import Home from "./Components/UIPages/Home";
import Footer from "./Components/UIPages/Footer";
import AboutUs from "./Components/UIPages/AboutUs";
import ProductPage from "./Components/UIPages/ProductPage";
import Franchise from "./Components//UIPages/Franchise";
import Contect from "./Components/UIPages/Contect";
import Product from "./Components/UIPages/Product";
import WorkFlow from "./Components/UIPages/WorkFlow";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/About" element={<AboutUs />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/Contect" element={<Contect />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
