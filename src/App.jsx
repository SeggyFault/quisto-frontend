import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PlatformRegulations from './pages/PlatformRegulations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/platform-regulations" element={<PlatformRegulations />} />
      </Routes>
    </Router>
  );
}

export default App;
