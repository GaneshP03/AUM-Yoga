import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Locations from "./components/Locations";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
function App() {
  return (
    <section className="min-h-screen w-screen">
      <NavBar />
      {/* Add a div to provide spacing below the fixed navbar */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </section>
  );
}

export default App;
