import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { SUBCATEGORIES, listProjectsByCategory } from '../data/projects'
import { Link } from 'react-router-dom'

export default function Projects(){
  return (
    <Layout>
      <Hero title="Nos Projets" breadcrumb={<span>Acceuil &gt; Projets</span>} image={{ src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop' }} />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUBCATEGORIES.map((cat)=> {
            const items = listProjectsByCategory(cat.key)
            const cover = items[0]?.hero?.thumb
            return (
              <article key={cat.key} className="bg-white rounded-lg shadow overflow-hidden">
                <Link to={`/projects/${cat.key}`}>
                  <img src={cover || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop'} alt={cat.label} className="h-48 w-full object-cover" loading="lazy" />
                </Link>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{cat.label}</h3>
                  <p className="text-sm text-slate-600 mb-3">{cat.intro}</p>
                  <Link to={`/projects/${cat.key}`} className="text-blue-600 hover:underline">Détails</Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
