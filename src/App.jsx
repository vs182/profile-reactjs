import { useState } from 'react';
import './app.scss';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfollio/Portfolio';
import Review from './components/review/Review';
import Topbar from './components/topbar/Topbar';
import Works from './components/works/Works';
import Menu from './components/menu/Menu'

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Review />
        <Contact />
      </div>
    </div>
  );
}

export default App;
