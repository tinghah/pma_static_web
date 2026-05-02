import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Operations from './components/Operations';
import Innovation from './components/Innovation';
import Support from './components/Support';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-200">
      <Navbar />
      <Hero />
      <About />
      <Operations />
      <Innovation />
      <Support />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
