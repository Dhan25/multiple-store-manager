import NavBar from "./components/NavBar/NavBar";
import Hero from "./sections/Hero/Hero";
// import About from './sections/About/About';
import Products from './sections/Products/Products';
import FeaturedCards from "./components/Cards/FeaturedCards";

// import animate on scroll
import Aos from "aos";
import 'aos/dist/aos.css';


function App() {
  Aos.init({
    duration: 1800,
    offset: 0,
  })
  
  return (
    <>
      <NavBar />
      <div className="h-full w-full">
        <Hero />
        <FeaturedCards />
      </div>
      <Products />
    </>
  );
}

export default App;
