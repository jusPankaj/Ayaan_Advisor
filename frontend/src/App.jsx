import "./App.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import WhyChoose from "./sections/WhyChoose";
import { OurServices } from "./sections/OurServices";
import Testimonials from "./sections/Testimonials";
import FAQs from "./sections/FAQs";
import ContactUs from "./sections/ContactUs";


function App() {
  return (
    <div className="font-primary">
      <Header />
      <Hero />
      <WhyChoose />
      <OurServices />
      <Testimonials />
      <FAQs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
