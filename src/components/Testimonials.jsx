import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, author }) => (
  <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
    <div className="flex items-center gap-1 text-yellow-500 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-500" />
      ))}
    </div>
    <p className="text-gray-800 text-lg leading-relaxed">“{quote}”</p>
    <div className="mt-4 text-sm font-semibold text-gray-900">— {author}</div>
  </div>
);

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ils nous font confiance</h2>
          <p className="mt-3 text-gray-600">Des entrepreneurs d’ici valident la clarté et la rapidité de Plania.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            quote="Plania m’a permis de visualiser mon idée avec une clarté et une précision remarquables."
            author="Annie Desjardins"
          />
          <TestimonialCard
            quote="Produit innovant au fort potentiel, développé par une talentueuse équipe québécoise."
            author="EDG Media"
          />
          <TestimonialCard
            quote="Grâce à l’IA, j’ai concrétisé mon idée en un temps record avec une clarté remarquable."
            author="Mélanie Gagnon"
          />
        </div>
      </div>
    </section>
  );
}
