import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ReporterDashboard from "./pages/Reporter/ReporterDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import PublicNewsFeed from "./pages/Public/PublicNewsFeed";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Reporter */}
        <Route path="/reporter" element={<ReporterDashboard />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Public */}
        <Route path="/news" element={<PublicNewsFeed />} />
      </Routes>
    </Router>
  );
}

export default App;
