import Header from './components/Header';
import Hero from './components/Hero';
import CasesShowcase from './components/CasesShowcase';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CasesShowcase />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
