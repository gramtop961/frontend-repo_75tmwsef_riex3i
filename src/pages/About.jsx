import Layout from '../components/Layout'
import Hero from '../components/Hero'

export default function About(){
  return (
    <Layout>
      <Hero title="Apropos de BBC" breadcrumb={<span>Acceuil &gt; Apropos de BBC</span>} image={{ src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop' }} />
      <section className="max-w-5xl mx-auto px-4 py-12 text-slate-700">
        <h2 className="text-2xl font-bold mb-4">Notre savoir-faire</h2>
        <p className="mb-4">BBC a grandi pour devenir l’une des plus grandes entreprises de construction en RDC, reconnue pour son expertise multidisciplinaire et sa fiabilité sur les marchés publics-privés et privés.</p>
        <p className="mb-4">Nous concevons, construisons et maintenons des projets de haute qualité, avec une approche intégrée et une forte culture de sécurité.</p>
        <p className="mb-4">Consultez notre brochure. Bienvenue chez BBC Sarlu.</p>
      </section>
    </Layout>
  )
}
