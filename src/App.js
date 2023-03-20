import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import NBramhananda from "./pages/NBramhananda";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nbramhananda" element={<NBramhananda />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
