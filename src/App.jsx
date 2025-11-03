import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top navigation */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-xl tracking-tight">Plania<span className="text-blue-600">.ai</span></a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#fonctionnalites" className="hover:text-blue-700">Fonctionnalités</a>
            <a href="#temoignages" className="hover:text-blue-700">Témoignages</a>
            <a href="#faq" className="hover:text-blue-700">FAQ</a>
            <a href="#demarrer" className="rounded-md bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 transition">Démarrer</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
      </main>

      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Plania. Tous droits réservés.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-700">Confidentialité</a>
            <a href="#" className="hover:text-blue-700">Conditions</a>
            <a href="mailto:hello@plania.ai" className="hover:text-blue-700">hello@plania.ai</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
