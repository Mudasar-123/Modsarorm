import { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AISection from './components/AISection';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ChatBot from './components/ChatBot';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => localStorage.getItem('orm-theme') || 'dark');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('orm-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'light' ? 'light-theme' : ''}>
        <LoadingScreen isLoading={isLoading} />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Services />
          <AISection />
          <Booking />
          <Testimonials />
          <WhyChooseUs />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <ChatBot />
      </div>
    </ThemeContext.Provider>
  );
}
