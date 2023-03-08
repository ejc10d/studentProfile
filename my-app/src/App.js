import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Header />
        <Navigation />
        <About />
        <Portfolio />
        <Contact />
        {/* <Resume /> */}
        <Footer />
      </div>
  );
}

export default App;
