import { FileText, LineChart, Search, Sparkles, Palette, Download } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, points }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 mb-4">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
    <ul className="mt-4 space-y-2 text-sm text-gray-700">
      {points.map((p, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Features() {
  return (
    <section id="fonctionnalites" className="relative py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Tout pour un plan d’affaires complet</h2>
          <p className="mt-3 text-gray-600">
            De la rédaction guidée aux projections financières, Plania réunit tout ce dont vous avez besoin pour convaincre partenaires et investisseurs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={FileText}
            title="Rédaction assistée par IA"
            description="Créez 10+ sections essentielles avec amélioration automatique du contenu."
            points={[
              'Processus étape par étape',
              'Amélioration du style et de la clarté',
              'Export PDF professionnel',
              'Marque personnalisée (couleurs & logo)'
            ]}
          />

          <FeatureCard
            icon={LineChart}
            title="Projections financières avancées"
            description="Modèles financiers sur 5 ans, entièrement personnalisables."
            points={[
              'Trésorerie & saisonnalité',
              "Suggestions par industrie",
              'Graphiques interactifs',
              'Tableaux prêts pour les investisseurs'
            ]}
          />

          <FeatureCard
            icon={Search}
            title="Recherche de marché automatisée"
            description="Données sectorielles et régionales, avec analyse concurrentielle."
            points={[
              'Données à jour pour tous les secteurs',
              'Repérage des opportunités',
              'Rapports détaillés',
              'Synthèses convaincantes'
            ]}
          />
        </div>

        {/* Secondary row: benefits */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[{
            Icon: Sparkles, title: 'Gain de temps', desc: 'Semaines → heures grâce à l’automatisation.'
          }, {
            Icon: Palette, title: 'Qualité professionnelle', desc: 'Documents soignés, crédibles et cohérents.'
          }, {
            Icon: Download, title: 'Export facile', desc: 'PDF prêt à partager, en un clic.'
          }, {
            Icon: LineChart, title: 'Convainquez', desc: 'Chiffres et analyses qui inspirent confiance.'
          }].map(({ Icon, title, desc }, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-700">
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-semibold text-gray-900">{title}</div>
              <div className="text-sm text-gray-600">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
