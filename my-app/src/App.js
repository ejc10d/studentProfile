import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="profile-app text-gray-400 bg-gray-900 body-font">
      <Header />
      <Navigation />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
