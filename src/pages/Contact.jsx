import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const name = form.get('name')
    const message = form.get('message')
    if(!email || !name || !message){
      setStatus({ ok: false, msg: 'Veuillez remplir les champs obligatoires.' })
      return
    }
    setTimeout(()=> setStatus({ ok: true, msg: 'Merci, nous vous répondrons sous peu.' }), 600)
  }

  return (
    <Layout>
      <Hero title="Contact" breadcrumb={<span>Acceuil &gt; Contact</span>} image={{ src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop' }} />
      <section className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Entrons en contact</h2>
          <p className="text-slate-600 mb-6">Nous répondons rapidement et restons disponibles pour vos besoins.</p>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom</label>
              <input name="name" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" required className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Téléphone</label>
              <input name="phone" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Sujet</label>
              <input name="subject" className="w-full border rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea name="message" required rows="5" className="w-full border rounded px-3 py-2"></textarea>
            </div>
            <button className="px-5 py-2 bg-blue-600 text-white rounded">Soumettre maintenant</button>
            {status && (
              <p className={`text-sm ${status.ok? 'text-green-600' : 'text-red-600'}`}>{status.msg}</p>
            )}
          </form>
        </div>
        <div className="text-slate-700">
          <h3 className="font-semibold mb-2">Coordonnées</h3>
          <p className="mb-2">N°2, Avenue des Poids Lourds, Quartier Ndanu, C/ Limete – Kinshasa RD - Congo</p>
          <p className="mb-2">info@bestbuilding.co</p>
          <p className="mb-2">+243 826200240</p>
          <div className="mt-6 h-64 bg-slate-200 rounded grid place-items-center text-slate-500">Carte intégrée (optionnelle)</div>
        </div>
      </section>
    </Layout>
  )
}
