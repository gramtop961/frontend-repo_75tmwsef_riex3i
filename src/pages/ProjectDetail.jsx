import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { useParams, Link } from 'react-router-dom'
import { findCategoryByKey, findProject } from '../data/projects'

export default function ProjectDetail(){
  const { category, slug } = useParams()
  const proj = findProject(category, slug)
  const cat = findCategoryByKey(category)

  if(!proj){
    return (
      <Layout>
        <section className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-2">Projet introuvable</h1>
          <p className="text-slate-600 mb-6">La page demandée n'existe pas.</p>
          <Link to={`/projects/${category}`} className="text-blue-600">Retour à la catégorie</Link>
        </section>
      </Layout>
    )
  }

  return (
    <Layout>
      <Hero title={proj.title} breadcrumb={<span>Acceuil &gt; Projets &gt; {cat?.label} &gt; {proj.title}</span>} image={{ src: proj.hero.src }} />

      <article className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-10 text-slate-700">
          <div>
            <h2 className="text-xl font-semibold mb-2">Informations</h2>
            <ul className="space-y-1 text-sm">
              <li><span className="font-medium">Catégorie:</span> {cat?.label}</li>
              <li><span className="font-medium">Localisation:</span> {proj.location}</li>
              <li><span className="font-medium">Année:</span> {proj.year}</li>
              {proj.metrics?.surface && <li><span className="font-medium">Surface:</span> {proj.metrics.surface}</li>}
              {proj.metrics?.duree && <li><span className="font-medium">Durée:</span> {proj.metrics.duree}</li>}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Aperçu</h2>
            <p className="text-sm leading-relaxed">{proj.overview}</p>
          </div>
        </div>

        <section className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="font-semibold mb-2">Périmètre des travaux</h3>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {proj.scope?.map((s, i)=> <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Défis</h3>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {proj.challenges?.map((s, i)=> <li key={i}>{s}</li>)}
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <h3 className="font-semibold mb-2">Approche</h3>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {proj.solutions?.map((s, i)=> <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Résultats / Impact</h3>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              {proj.results?.map((s, i)=> <li key={i}>{s}</li>)}
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Galerie</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {proj.gallery?.map((g, i)=> (
              <a key={i} href={g.src} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded">
                <img src={g.thumb || g.src} alt={`${proj.title} ${i+1}`} className="w-full h-40 object-cover group-hover:scale-105 transition" loading="lazy" />
              </a>
            ))}
          </div>
        </section>

        <div className="flex items-center gap-6">
          <Link to={`/projects/${category}`} className="text-blue-600 hover:underline">← Retour à {cat?.label}</Link>
          <Link to="/projects" className="text-slate-700 hover:underline">Tous les projets</Link>
        </div>
      </article>
    </Layout>
  )
}
