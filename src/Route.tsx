import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewResearch from "./pages/NewResearch";
import MyResearch from "./pages/MyResearch";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newresearch" element={<NewResearch />} />
        <Route path="/myresearch" element={<MyResearch />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
