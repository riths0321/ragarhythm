import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Category from './pages/Category';
import About from './pages/About';
import Contact from './pages/Contact'; 
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import SubscribePopup from './components/SubscribePopup';
import AuthPage from './pages/AuthPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
     
      <div className="min-h-screen bg-white flex flex-col">

        {/* Navigation */}
        <Header />

        <SubscribePopup />

        {/* Main Content */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/signin" element={<AuthPage initialType="signin" />} />
            <Route path="/signup" element={<AuthPage initialType="signup" />} /> 

           
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#111827',
              color: '#fff',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 'bold'
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;