import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Science from "./pages/Science";
import Results from "./pages/Results";
import About from "./pages/About";
import PageNotFound from "./lib/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/science" element={<Science />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;