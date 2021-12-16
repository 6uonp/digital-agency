import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
import Clients from './components/Clients/Clients';
import Faq from './components/Faq/Faq';
import Feature from './components/Feature/Feature';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import Support from './components/Support/Support';

const App = () => {
  // const homeRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="App">
      <Header />
      <div className="body__main">
        <Home />
        <Feature />
        <Banner />
        <Pricing />
        <Support />
        <Clients />
        <Blog />
        <Faq />
      </div>
    </div>
  );
};

export default App;
