import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
       <Resume/>
      <Portfolio/>
      <Contact/>
    </>
  );
}

export default App;
