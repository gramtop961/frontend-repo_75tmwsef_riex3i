import Layout from '../components/Layout'
import Hero from '../components/Hero'

const SERVICES = [
  'CENTRAL A BETON',
  'USINE BRIQUE',
  'FONDATIONS SUR PIEUX',
  'PALPLANCHES',
  "PLANS D'ARCHITECTURE",
  'TRAVAUX DE CONSTRUCTION',
  'TRAVAUX MÉCANIQUES ET ÉLECTRIQUES',
  'FINITION',
  'ROUTES',
]

export default function Services(){
  return (
    <Layout>
      <Hero title="Tous les services" breadcrumb={<span>Acceuil &gt; Domaine d'activité</span>} image={{ src: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' }} />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s)=> (
            <div key={s} className="bg-white rounded-lg shadow p-6">
              <div className="h-12 w-12 rounded bg-blue-50 border border-blue-200 mb-4"></div>
              <h3 className="font-semibold">{s}</h3>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
