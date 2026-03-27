import './index.css';
import useFadeUp from './hooks/useFadeUp';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Problem from './components/Problem';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Transformation from './components/Transformation';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  useFadeUp();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Services />
        <Portfolio />
        <Transformation />
        <Testimonials />
        <Pricing />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
