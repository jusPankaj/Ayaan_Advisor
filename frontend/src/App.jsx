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
// import Footer1 from "./sections/Footer1";
// import Footer1 from "./sections/Footer1";


function App() {
  return (
    <div className="font-primary">
      <Header />
      <Hero />
      <WhyChoose />
      <OurServices />
      <Testimonials />
      <TopDestinations />
      <FAQs />
      <ContactUs />
      <Footer />
      {/* <Footer1 /> */}
    </div>
  );
}

export default App;
