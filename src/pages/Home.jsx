import { useMemo, useState } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { CATEGORIES, SUBCATEGORIES, PROJECTS } from '../data/projects'
import { Link } from 'react-router-dom'

export default function Home(){
  const [tab, setTab] = useState('tous')
  const visible = useMemo(()=>{
    if(tab==='tous') return PROJECTS
    const subs = SUBCATEGORIES.filter(s=>s.parent===tab).map(s=>s.key)
    return PROJECTS.filter(p=>subs.includes(p.category))
  },[tab])

  return (
    <Layout>
      <Hero title="Acceuil" breadcrumb={<span>Acceuil</span>} image={{ src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2000&auto=format&fit=crop' }} />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Nos Projets</h2>

        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((c)=> (
            <button key={c.key} onClick={()=>setTab(c.key)} className={`px-4 py-2 rounded border ${tab===c.key? 'bg-slate-900 text-white border-slate-900' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}>{c.label}</button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p)=> (
            <article key={p.slug} className="bg-white rounded-lg shadow overflow-hidden">
              <Link to={`/projects/${p.category}/${p.slug}`}>
                <img src={p.hero.thumb} alt={p.title} className="h-48 w-full object-cover" loading="lazy" />
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{p.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{p.location} • {p.year}</span>
                  <Link to={`/projects/${p.category}/${p.slug}`} className="text-blue-600 hover:underline">Détails</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/projects" className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">Voir tous les projets</Link>
        </div>
      </section>
    </Layout>
  )
}
