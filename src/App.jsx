import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Houses from "./component/Houses";
import Community from "./component/Community";
import { Routes, Route } from "react-router-dom";
// import PropertyDetails from "./component/PropertyDetails";
function App() {
  return (
    <div className="">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="houses" element={<Houses />}></Route>
        <Route path="community" element={<Community />}></Route>
        {/* <Route path="houses/:housesId" element={<PropertyDetails />}></Route>÷ */}
      </Routes>
    </div>
  );
}

export default App;
