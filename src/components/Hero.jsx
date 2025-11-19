export default function Hero({ title, breadcrumb, image }){
  return (
    <section className="relative bg-slate-100">
      <picture>
        <source srcSet={image?.webp || image?.src} type="image/webp" />
        <img data-hero src={image?.src || 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop'} alt={title} className="w-full h-[280px] md:h-[420px] object-cover" />
      </picture>
      <div className="absolute inset-0 bg-slate-950/50" aria-hidden></div>
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 flex flex-col justify-end py-8">
        {breadcrumb && (
          <nav className="text-slate-200 text-sm mb-2">
            {breadcrumb}
          </nav>
        )}
        <h1 className="text-white text-3xl md:text-5xl font-bold drop-shadow">{title}</h1>
      </div>
    </section>
  )
}
