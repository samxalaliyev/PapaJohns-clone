import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Header/Header";
import Navbar from "./Header/Navbar";
import Papadias from "./pages/Papadias";
import Pizza from "./pages/Pizza";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/papadias" element={<Papadias />} />
        <Route path="/pizza" element={<Pizza />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
