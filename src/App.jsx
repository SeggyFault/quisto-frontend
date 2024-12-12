import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import FullScreenLayout from './layout/FullScreenLayout';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PlatformRegulations from './pages/PlatformRegulations';
import Registration from './pages/Registration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home/></MainLayout>} />
        <Route path="/privacy-policy" element={<FullScreenLayout><PrivacyPolicy /></FullScreenLayout>} />
        <Route path="/platform-regulations" element={<FullScreenLayout><PlatformRegulations /></FullScreenLayout>} />
        <Route path="/registrati" element={<FullScreenLayout><Registration></Registration></FullScreenLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
