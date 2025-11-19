import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-slate-900 text-slate-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-semibold mb-4">BBC Sarlu</h3>
          <p className="text-slate-300 leading-relaxed">
            Votre partenaire de choix pour la conception, la construction et la maintenance. Nous accompagnons nos clients de bout en bout avec une approche intégrée et des standards élevés de qualité et de sécurité.
          </p>
          <div className="mt-4 space-y-2 text-slate-300">
            <div className="flex items-center gap-2"><Phone size={16}/>+243 826200240</div>
            <div className="flex items-center gap-2"><Phone size={16}/>+243 829884283</div>
            <a href="mailto:info@bestbuilding.co" className="flex items-center gap-2 hover:text-white"><Mail size={16}/>info@bestbuilding.co</a>
            <div className="flex items-center gap-2"><MapPin size={16}/>N°2, Avenue des Poids Lourds, Quartier Ndanu, C/ Limete – Kinshasa RD - Congo</div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Bulletins d'information</h4>
          <p className="text-slate-300 text-sm mb-3">Recevez nos actualités et mises à jour par email.</p>
          <form onSubmit={(e)=>{e.preventDefault(); alert("Merci pour votre abonnement !")}} className="flex gap-2">
            <input type="email" required placeholder="Votre email" className="flex-1 px-3 py-2 rounded bg-slate-800 border border-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">S'abonner</button>
          </form>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2"><MapPin size={16}/>N°2, Avenue des Poids Lourds, Quartier Ndanu, C/ Limete – Kinshasa RD - Congo</li>
            <li className="flex items-center gap-2"><Mail size={16}/>info@bestbuilding.co</li>
            <li className="flex items-center gap-2"><Phone size={16}/>+243 826200240</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Liens de l'entreprise</h4>
          <ul className="space-y-2 text-slate-300">
            <li><Link to="/">Acceuil</Link></li>
            <li><Link to="/about">Apropos de BBC</Link></li>
            <li><Link to="/services">Domaine d'activité</Link></li>
            <li><Link to="/projects">Projets</Link></li>
            <li><Link to="/resources/personnel">Ressources - Personnel</Link></li>
            <li><Link to="/resources/engins">Ressources - Materiel</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-slate-400 text-sm">© {new Date().getFullYear()} BBC Sarlu. Tous droits réservés.</div>
    </footer>
  )
}
