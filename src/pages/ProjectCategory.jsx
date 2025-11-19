import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { useParams, Link } from 'react-router-dom'
import { findCategoryByKey, listProjectsByCategory } from '../data/projects'

export default function ProjectCategory(){
  const { category } = useParams()
  const cat = findCategoryByKey(category)
  const items = listProjectsByCategory(category)

  if(!cat){
    return (
      <Layout>
        <section className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-2">Catégorie introuvable</h1>
          <p className="text-slate-600 mb-6">La page demandée n'existe pas.</p>
          <Link to="/projects" className="text-blue-600">Retour aux projets</Link>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      <Hero title={cat.label} breadcrumb={<span>Acceuil &gt; Projets &gt; {cat.label}</span>} image={{ src: items[0]?.hero?.src || 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2000&auto=format&fit=crop' }} />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <p className="text-slate-700 mb-6">{cat.intro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p)=> (
            <article key={p.slug} className="bg-white rounded-lg shadow overflow-hidden">
              <Link to={`/projects/${category}/${p.slug}`}>
                <img src={p.hero.thumb} alt={p.title} className="h-48 w-full object-cover" loading="lazy" />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{p.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{p.location} • {p.year}</span>
                  <Link to={`/projects/${category}/${p.slug}`} className="text-blue-600 hover:underline">Détails</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8"><Link to="/projects" className="text-blue-600 hover:underline">← Retour à Projets</Link></div>
      </section>
    </Layout>
  )
}
