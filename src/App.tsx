import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<ReviewDetails />} />
          <Route path="category" element={<Category />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
