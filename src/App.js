import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import OfficesSection from './components/OfficesSection';
import LeisureSection from './components/LeisureSection';
import Management from './components/Management';
import Commissions from './components/Commissions';
import Dativa from './components/Dativa';
import Honorarios from './components/Honorarios';
import EventsAdmin from './components/EventsAdmin';
import Login from './components/Login';
import Footer from './components/Footer';
import { Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('oab_auth') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diretoria" element={<Management />} />
            <Route path="/sedes" element={<OfficesSection />} />
            <Route path="/lazer" element={<LeisureSection />} />
            <Route path="/comissoes" element={<Commissions />} />
            <Route path="/dativa" element={<Dativa />} />
            <Route path="/honorarios" element={<Honorarios />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin-eventos"
              element={
                <ProtectedRoute>
                  <EventsAdmin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
