import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import IrrigationPredictor from "./pages/IrrigationPredictor";
import QueryForm from "./pages/QueryForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-200 via-green-300 to-green-400">
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/predict" element={<IrrigationPredictor />} />
          <Route path="/raise-query" element={<QueryForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
