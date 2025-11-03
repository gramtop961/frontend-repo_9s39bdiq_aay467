import { HelpCircle, Mail, Phone, MapPin, Shield, Clock } from 'lucide-react';

const Item = ({ q, a }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-5">
    <div className="font-semibold text-gray-900">{q}</div>
    <p className="mt-2 text-gray-600">{a}</p>
  </div>
);

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-t from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-3 gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium mb-4">
            <HelpCircle className="h-4 w-4" /> FAQ
          </div>
          <h3 className="text-3xl font-bold text-gray-900">Questions fréquentes</h3>
          <p className="mt-3 text-gray-600">Tout ce qu’il faut savoir pour démarrer en confiance.</p>

          <div className="mt-8 space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-blue-600" /> De semaines à heures</div>
            <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-blue-600" /> Qualité et cohérence</div>
          </div>

          {/* Contact */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-5">
            <div className="font-semibold text-gray-900 mb-2">Nous joindre</div>
            <div className="space-y-2 text-gray-700 text-sm">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gray-500" /> 570 Boulevard Roland Therrien, Bureau #203, Longueuil, QC</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-gray-500" /> 514-619-5579</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-gray-500" /> hello@plania.ai</div>
            </div>
            <a href="https://plania.ai" target="_blank" rel="noreferrer" className="mt-3 inline-block text-blue-700 font-semibold hover:underline">plania.ai</a>
          </div>
        </div>

        <div className="lg:col-span-2 grid gap-4">
          <Item q="Comment fonctionne Plania?" a="Répondez à quelques questions guidées et l’IA génère automatiquement les sections essentielles, tout en vous proposant des améliorations de contenu." />
          <Item q="Puis-je personnaliser mon plan?" a="Oui. Modifiez chaque section, ajoutez votre logo et vos couleurs, et exportez un PDF professionnel prêt à partager." />
          <Item q="Offrez-vous des projections financières?" a="Oui. Créez des prévisions sur 5 ans, modélisez la saisonnalité et visualisez vos données avec des graphiques interactifs." />
          <Item q="La recherche de marché est-elle incluse?" a="Plania fournit des données sectorielles et régionales, identifie des concurrents et met en évidence les opportunités du marché." />
          <Item q="Combien de temps ça prend?" a="La majorité des utilisateurs complètent une première version convaincante en quelques heures." />
        </div>
      </div>

      {/* CTA Bar */}
      <div id="demarrer" className="mt-16 mx-auto max-w-5xl px-6">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold">Créez votre plan en quelques minutes</h4>
            <p className="text-white/90">Essayez Plania dès aujourd’hui et gagnez un temps précieux.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-md bg-white text-blue-700 px-6 py-3 font-semibold shadow hover:bg-blue-50 transition">Créer mon plan</a>
            <a href="#demo" className="rounded-md bg-white/10 ring-1 ring-white/30 text-white px-6 py-3 font-semibold hover:bg-white/15 transition">Voir un exemple</a>
          </div>
        </div>
      </div>
    </section>
  );
}
