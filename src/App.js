import React from 'react';
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Acerca from './pages/Acerca/Acerca';
import Habilidades from './pages/Habilidades/Habilidades';
import Portafolio from './pages/Portafolio/Portafolio';
import { Navbar,Footer } from './components';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Acerca" exact component={Acerca} />
      <Route path="/Habilidades" exact component={Habilidades} />
      
       <Route path="/Portafolio" exact component={Portafolio} />
       
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
