import Spline from '@splinetool/react-spline';
import { Rocket, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      {/* Background 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col items-start justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium mb-4">
            <Rocket className="h-4 w-4" />
            Fait au Québec · Propulsé par l’IA
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Transformez votre idée en un plan d’affaires prêt pour les investisseurs, en quelques heures.
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-2xl">
            Plania automatise la rédaction complète de votre plan d’affaires — analyse de marché, projections financières sur 5 ans et export PDF professionnel — le tout dans une interface simple et guidée.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#demarrer"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-6 py-3 font-semibold shadow hover:bg-blue-700 transition"
            >
              Commencer mon plan maintenant
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-md bg-white text-blue-700 ring-1 ring-blue-200 px-5 py-3 font-semibold hover:bg-blue-50 transition"
            >
              <PlayCircle className="h-5 w-5" /> Voir un exemple
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Gain de temps: semaines → heures
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Qualité professionnelle
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Idéal pour le financement
            </div>
          </div>
        </div>

        {/* Visual placeholder area describing the product screenshots */}
        <div className="relative hidden lg:block">
          <div className="absolute -right-8 top-10 w-64 h-44 rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow-lg" />
          <div className="absolute right-4 top-40 w-72 h-48 rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow-xl" />
          <div className="absolute -right-2 top-72 w-60 h-40 rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow-lg" />
        </div>
      </div>
    </section>
  );
}
