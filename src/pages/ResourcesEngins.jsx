import Layout from '../components/Layout'
import Hero from '../components/Hero'

const ENGIN_LIST = [
  'Chargeuse sur pneus',
  'Compactor double bill',
  'Excavator',
  'Machine de forage',
  'Roller compactor',
  'Tractopelle',
  'Trailer pump',
  'Mini chargeur a pneus',
  'Niveleuse',
  'Auto chargement bétonniere',
  'Vibro Hammer',
]

export default function ResourcesEngins(){
  return (
    <Layout>
      <Hero title="B.B.C Engins" breadcrumb={<span>Acceuil &gt; Ressources &gt; Engins</span>} image={{ src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop' }} />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGIN_LIST.map((e, i)=> (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow">
              <img src={`https://picsum.photos/seed/engin${i}/800/500`} alt={e} className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-4">
                <h3 className="font-semibold">{e}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
