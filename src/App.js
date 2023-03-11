import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <Header />
        <Router>
        <Navigation />
          <Routes>
          <Route path="/studentProfile" element={<About />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/resume" element={<Resume />}/>
          </Routes>
        </Router>
        <Footer />
      </div>
  );
}

export default App;
