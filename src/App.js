import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Work from './Components/Work/Work';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Blog } from './Components/Blog/Blog';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTheme } from './Contexts/ThemeContext';



AOS.init();



function App() {

  const { purpleMode, togglePurpleMode } = useTheme()

  return (
    <div className={`App ${purpleMode ? 'purple-theme' : ''}`} >
      <Navbar />
      <Hero />
      <Work />
      <Blog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
