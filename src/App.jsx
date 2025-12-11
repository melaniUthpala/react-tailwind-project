import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroBanner from './components/HeroBanner';
import HowWeHelp from './components/HowWeHelp';
import About from './components/AboutHome'; 
import AboutSection from './components/AboutSection';
import OurServices from './components/OurServices';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import PricingSection from './components/PricingSection';
import Clients from "./components/Clients";
import Team from "./components/Team";
import BookAppointment from './components/BookAppointment';
import LatestNews from './components/LatestNews';
import NotFoundPage from "./components/NotFoundPage";
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <HeroBanner />
            <HowWeHelp />
            <About />
            <AboutSection />
            <OurServices />
            <Services />
            <ServiceDetails />
            <Stats />
            <Testimonials />
            <PricingSection />
            <Clients />
            <Team />
            <BookAppointment />
            <LatestNews />
            <Blog />
          </>
        } />

        <Route path="/about" element={<AboutSection />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-details" element={<ServiceDetails />} />
        <Route path="/pricing" element={<PricingSection />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<BookAppointment />} />

        {/* Not Found Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
