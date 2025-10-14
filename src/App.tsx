import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AccessWayfinderPage from './pages/AccessWayfinderPage';
import DixieAIPage from './pages/DixieAIPage';

// Component to handle scroll to hash on navigation
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/access-wayfinder" element={<AccessWayfinderPage />} />
          <Route path="/projects/dixie-ai" element={<DixieAIPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
