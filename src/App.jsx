import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;