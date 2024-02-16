import './App.css'
import 'swiper/css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import ServiceSection from './components/ServiceSection';
import ClientSection from './components/ClientSection';
import ApproachSection from './components/ApproachSection';
import CallActionSection from './components/CallActionSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  gsap.registerPlugin(ScrollTrigger)

  return (
    <>
      <Header/>

      <main>
        <HeroSection/>
        <FeaturesSection/>
        <PortfolioSection/>
        <PricingSection/>
        <ServiceSection/>
        <ClientSection/>
        <TestimonialsSection/>
        <ApproachSection/>
        <CallActionSection/>
        <BlogSection/>
      </main>

      <Footer/>
    </>
  )
}

export default App
