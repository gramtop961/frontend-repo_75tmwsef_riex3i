import Layout from '../components/Layout'
import Hero from '../components/Hero'

export default function ResourcesPersonnel(){
  return (
    <Layout>
      <Hero title="Moyens humains" breadcrumb={<span>Acceuil &gt; Ressources &gt; Personnel</span>} image={{ src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' }} />
      <section className="max-w-5xl mx-auto px-4 py-12 text-slate-700">
        <p className="mb-6">Une équipe enthousiaste et expérimentée dédiée à la réussite des projets.</p>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">ADMINISTRATION GENERALE</h3>
          <p>Management et coordination globale.</p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">ADMINISTRATION TECHNIQUE</h3>
          <ul className="list-disc list-inside">
            <li>ETUDES ARCHITECTURE</li>
            <li>ETUDES DE GENIE CIVIL</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">ADMINISTRATION FINANCIERE – COMPTABILITE</h3>
          <ul className="list-disc list-inside">
            <li>COMPTABILITE - FINANCE</li>
            <li>AUDIT ET CONTRÔLE</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
