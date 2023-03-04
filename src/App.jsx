import { useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Houses from "./component/Houses";
import Community from "./component/Community";
import { Routes, Route } from "react-router-dom";
import PropertyDetails from "./component/PropertyDetails";
function App() {
  const [navIcon, setNavIcon] = useState(false);
  const handleNav = () => {
    setNavIcon(!navIcon);
  };
  return (
    <div
      className={`${navIcon ? "h-[700px]" : ""} ${
        navIcon ? "overflow-y-hidden" : ""
      }`}
    >
      <Navbar handleNav={handleNav} navIcon={navIcon} />

      <Routes>
        <Route path="/" element={<Home navIcon={navIcon} />} />
        <Route path="houses" element={<Houses />}></Route>
        <Route path="community" element={<Community />}></Route>
        <Route path="houses/:housesId" element={<PropertyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
