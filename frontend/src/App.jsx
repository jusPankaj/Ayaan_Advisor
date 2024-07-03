import "./App.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import WhyChoose from "./sections/WhyChoose";
import { OurServices } from "./sections/OurServices";
import Testimonials from "./sections/Testimonials";
import FAQs from "./sections/FAQs";
import ContactUs from "./sections/ContactUs";
import TopDestinations from "./sections/TopDestinations";
import ContactSection from "./sections/ContactSection";
import WhyChoose1 from "./sections/WhyChoose1";
import FAQs1 from "./sections/FAQs1";
import OurServicesSlider1 from "./sections/OurServicesSlider1";
import Testimonials1 from "./sections/Testimonials1";
import Hero1 from "./sections/Hero1";
import TopDestinatons1 from "./sections/TopDestinatons1";
import Header1 from "./sections/Header1";
import Footer1 from "./sections/Footer1";

function App() {
  return (
    <div className="font-primary">
      <Header />
      {/* <Header1 /> */}
      <Hero />
      {/* <Hero1 /> */}
      <WhyChoose />
      {/* <WhyChoose1 /> */}

      {/* <OurServicesSlider1 /> */}
      <OurServices />
      <Testimonials />
      {/* <Testimonials1 /> */}
      <TopDestinations />
      {/* <TopDestinatons1 /> */}

      <FAQs />
      <ContactUs />
      {/* <FAQs1 /> */}

      {/* <ContactSection /> */}

      <Footer />
      {/* <Footer1 /> */}
      {/* <Navbar />
      
      <Footer /> */}

      {/* <Main /> */}
    </div>
  );
}

export default App;
