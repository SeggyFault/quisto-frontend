import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PlatformRegulations from './pages/PlatformRegulations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home/></MainLayout>} />
        <Route path="/privacy-policy" element={<MainLayout><PrivacyPolicy /></MainLayout>} />
        <Route path="/platform-regulations" element={<MainLayout><PlatformRegulations /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
