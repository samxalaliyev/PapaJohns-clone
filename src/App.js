import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Header/Header";
import Navbar from "./Header/Navbar";
import Papadias from "./pages/Papadias";
import Pizza from "./pages/Pizza";
import Footer from "./components/Footer";
import Details from "./pages/Details";
import Offers from "./pages/Offers";
import OfferDetails from "./pages/OfferDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import ScrollTo from "./components/Scrolto";

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
      }
    });
  }, []);
  return (
    <div className="App">
      <Header users={users} />
      <Navbar />
      <ScrollTo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/papadias" element={<Papadias />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/kampains/:id" element={<Details />} />
        <Route path="/offersdetail/:id" element={<OfferDetails />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
      <Footer />
    </div>
  );
}

export default App;
