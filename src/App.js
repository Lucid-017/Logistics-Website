import Footer from './components/layout/Footer';
import Intro from './components/layout/Intro';
import Navbar from './components/layout/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Services from './components/layout/Services';
import Identity from './components/layout/Identity';
import OurFeatures from './components/layout/OurFeatures';
import CarouselContainer from './components/CarouselContainer';
import Testimonials from './components/layout/Testimonials';
import Home from './components/layout/pages/Home';
import NotFound from './components/layout/pages/NotFound';
import Contact from './components/layout/pages/Contact';
import About from './components/layout/pages/About';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/notfound" element={<NotFound/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      
      <Footer/>
   </Router>
  );
}

export default App;