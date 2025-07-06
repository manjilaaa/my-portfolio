import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar'; 
import Skills from './components/Skills';


// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
   <Sidebar/>
      {/* <Navbar/> */}
        <div style={{ marginLeft: '300px' }}>

      <Hero/>
      <About/>
      <Skills/>
      <Resume/>
      <Portfolio/>
      <Contact/>
   
      </div>
    </>
  );
}

export default App;
