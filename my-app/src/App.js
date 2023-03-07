import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={About}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/resume' component={Resume}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
