import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Mail, Phone, MapPin } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Acceuil' },
  { to: '/about', label: "Apropos de BBC" },
  { to: '/services', label: "Domaine d'activité" },
  { to: '/projects', label: 'Projets' },
  { to: '/resources/personnel', label: 'Personnel' },
  { to: '/resources/engins', label: 'Engins' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white text-slate-800 shadow-sm">
      {/* Top info bar */}
      <div className="hidden md:block bg-slate-900 text-slate-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          <p className="opacity-90">Plus de 10 ans d’expérience en construction et ingénierie</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 opacity-90"><MapPin size={16} /><span>N°2, Avenue des Poids Lourds, Quartier Ndanu, C/ Limete – Kinshasa RD - Congo</span></div>
            <a href="mailto:info@bestbuilding.co" className="flex items-center gap-2 hover:text-white"><Mail size={16} />info@bestbuilding.co</a>
            <a href="tel:+243826200240" className="flex items-center gap-2 hover:text-white"><Phone size={16} />+243 826200240</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="BBC" className="h-10 w-auto" onError={(e)=>{e.currentTarget.src='https://dummyimage.com/140x40/0f172a/ffffff&text=BBC'}} />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className={({isActive})=>`text-sm font-medium hover:text-slate-900 ${isActive? 'text-slate-900' : 'text-slate-600'}`}>{n.label}</NavLink>
          ))}
        </nav>
        <button aria-label="Toggle navigation" className="md:hidden p-2 rounded border border-slate-200" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200">
          <nav className="px-4 py-3 flex flex-col">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={()=>setOpen(false)} className={({isActive})=>`py-2 text-sm ${isActive? 'text-slate-900 font-semibold' : 'text-slate-600'}`}>{n.label}</NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
