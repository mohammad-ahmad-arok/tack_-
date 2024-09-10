import AboutUs from "./components/AboutUs/AboutUs";
import HelpNow from "./components/HelpNow/HelpNow";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./components/Services/Services";
import Appointment from "./components/Appointment/Appointment";
import Departments from "./components/Departments/Departments";
import Testimonials from "./components/Testimonials/Testimonials";
import Doctors from "./components/Doctors/Doctors";
import Gallery from "./components/Gallery/Gallery";
import Pricing from "./components/Pricing/Pricing";
import FAQs from "./components/FAQs/FAQs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GoTopBtn from "./components/GoTopBtn/GoTopBtn";
import MainServices from "./components/MainServices/MainServices";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <MainServices/>
      <HelpNow />
      <AboutUs />
      <Services />
      <Appointment />
      <Departments />
      <Testimonials />
      <Doctors />
      <Gallery />
      <Pricing />
      <FAQs />
      <Contact />
      <Footer />
      <GoTopBtn/>
    </>
  );
}

export default App;
