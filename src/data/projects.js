// Randomized placeholder dataset matching required structure and French labels.
// Replace image URLs with your actual assets later.

export const CATEGORIES = [
  { key: 'tous', label: 'Tous les projets' },
  { key: 'batiments', label: 'BATIMENTS' },
  { key: 'metallique', label: 'CONSTRUCTION METTALIQUE' },
  { key: 'ouvrage-art', label: 'OUVRAGE D’ART ET TRAVAUX SPECIAUX' },
  { key: 'route-vrd', label: 'ROUTE ET VRD' },
]

export const SUBCATEGORIES = [
  { key: 'batiments-administratifs', parent: 'batiments', label: 'BATIMENTS ADMINISTRATIFS', intro: "Projets administratifs et institutionnels de haute qualité." },
  { key: 'batiments-residentiels', parent: 'batiments', label: 'BATIMENTS RESIDENTEILS', intro: "Résidences modernes et confortables." },
  { key: 'batiments-commerciaux', parent: 'batiments', label: 'BATIMENTS COMMERCIAUX', intro: "Centres commerciaux et espaces de vente." },
  { key: 'batiments-industriels', parent: 'batiments', label: 'BATIMENTS INDUSTRUELS', intro: "Sites industriels et usines." },
  { key: 'hangars', parent: 'batiments', label: 'HENGARS', intro: "Hangars et entrepôts." },
  { key: 'fondations-profondes', parent: 'ouvrage-art', label: 'TRAVAUX DE FONDATION PROFONDES', intro: "Fondations sur pieux et solutions géotechniques." },
  { key: 'travaux-maritimes-quais', parent: 'ouvrage-art', label: 'TRAVAUX MARITIMES: QUAIS', intro: "Ouvrages maritimes et infrastructures portuaires." },
  { key: 'chaussee-rigide-et-souple', parent: 'route-vrd', label: 'CHAUSSEE RIGIDE et SOUPLE', intro: "Routes et voiries urbaines." },
  { key: 'route-et-vrd', parent: 'route-vrd', label: 'ROUTE ET VRD', intro: "Routes et VRD divers." },
]

const img = (id) => ({
  src: `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`,
  thumb: `https://images.unsplash.com/photo-${id}?q=60&w=800&auto=format&fit=crop`,
})

export const PROJECTS = [
  // BATIMENTS ADMINISTRATIFS
  { slug: 'crown-tower', category: 'batiments-administratifs', title: 'Crown Tower', location: 'Kinshasa, RDC', year: '2021', hero: img('1503387762-592deb58ef4e'), summary: 'Immeuble administratif moderne.', gallery: [img('1503387762-592deb58ef4e'), img('1496307042754-b4aa456c4a2d'), img('1494526585095-c41746248156')], metrics: { surface: '18 000 m²', duree: '24 mois' }, overview: 'Projet administratif de grande envergure avec des standards internationaux.', scope: ['Gros œuvre', 'Second œuvre', 'Finitions'], challenges: ['Délais serrés', 'Contraintes urbaines'], solutions: ['Planification intégrée', 'Méthodes industrialisées'], results: ['Délais respectés', 'Satisfaction client'] },
  { slug: 'administratifs-siege-provincial', category: 'batiments-administratifs', title: 'Siège provincial', location: 'Kinshasa, RDC', year: '2020', hero: img('1509401934319-c05c3d9bc2d3'), summary: 'Siège provincial administratif.', gallery: [img('1509401934319-c05c3d9bc2d3'), img('1497366216548-37526070297c'), img('1491884662610-dfcd28f30cf5')], metrics: { surface: '12 500 m²', duree: '18 mois' }, overview: 'Bâtiment administratif durable et fonctionnel.', scope: ['Structure', 'Architecture', 'M.E.P'], challenges: ['Logistique des matériaux'], solutions: ['Approvisionnement local'], results: ['Coûts optimisés'] },

  // BATIMENTS COMMERCIAUX
  { slug: 'kinshasa-mall', category: 'batiments-commerciaux', title: 'Kinshasa Mall', location: 'Kinshasa, RDC', year: '2019', hero: img('1486308510493-aa64833637b6'), summary: 'Centre commercial de référence.', gallery: [img('1486308510493-aa64833637b6'), img('1541976076758-95bbd1f83f25'), img('1479839672679-a46483c0e7c8')], metrics: { surface: '35 000 m²', duree: '30 mois' }, overview: 'Complexe commercial avec boutiques et espaces de loisirs.', scope: ['Structure en béton', 'Façades', 'VRD'], challenges: ['Coordination multi-lots'], solutions: ['BIM de coordination'], results: ['Ouverture à temps'] },
  { slug: 'empire-galerie', category: 'batiments-commerciaux', title: 'Empire Galerie', location: 'Kinshasa, RDC', year: '2018', hero: img('1449844908441-8829872d2607'), summary: 'Galerie commerciale haut standing.', gallery: [img('1449844908441-8829872d2607'), img('1451187580459-43490279c0fa'), img('1487956381093-6f0654779049')], metrics: { surface: '22 000 m²', duree: '20 mois' }, overview: 'Espaces commerciaux premium.', scope: ['Gros œuvre', 'Second œuvre'], challenges: ['Flux piétons'], solutions: ['Phasage intelligent'], results: ['Expérience client améliorée'] },
  { slug: 'crown-retail-pods', category: 'batiments-commerciaux', title: 'Crown Retail Pods', location: 'Kinshasa, RDC', year: '2022', hero: img('1460472178825-e5240623afd5'), summary: 'Ensembles commerciaux modulaires.', gallery: [img('1460472178825-e5240623afd5'), img('1529429611273-9e9e714bdd20'), img('1500530855697-b586d89ba3ee')], metrics: { surface: '8 000 m²', duree: '12 mois' }, overview: 'Modules commerciaux rapides à déployer.', scope: ['Structure métallique', 'Architecture'], challenges: ['Délais courts'], solutions: ['Préfabrication'], results: ['Mise en service rapide'] },

  // BATIMENTS RESIDENTIELS
  { slug: 'residence-river-tower', category: 'batiments-residentiels', title: 'Résidence River Tower', location: 'Kinshasa, RDC', year: '2021', hero: img('1529429611273-9e9e714bdd20'), summary: 'Résidences haut de gamme.', gallery: [img('1529429611273-9e9e714bdd20'), img('1519710164239-da123dc03ef4'), img('1554995207-1d2c3a6fdaa8')], metrics: { surface: '15 000 m²', duree: '22 mois' }, overview: 'Programme résidentiel premium.', scope: ['Structures', 'Finitions'], challenges: ['Qualité de finition'], solutions: ['Contrôle qualité renforcé'], results: ['Clients satisfaits'] },
  { slug: 'crown-interieurs', category: 'batiments-residentiels', title: 'Crown Intérieurs', location: 'Kinshasa, RDC', year: '2020', hero: img('1497366216548-37526070297c'), summary: 'Intérieurs et aménagements.', gallery: [img('1497366216548-37526070297c'), img('1497366216548-37526070297c'), img('1479839672679-a46483c0e7c8')], metrics: { surface: '5 000 m²', duree: '10 mois' }, overview: 'Rénovation et aménagement intérieur.', scope: ['Plâtrerie', 'Menuiserie', 'Revêtements'], challenges: ['Opérations en site occupé'], solutions: ['Planification de nuit'], results: ['Zéro incident'] },
  { slug: 'afromosia', category: 'batiments-residentiels', title: 'Afromosia', location: 'Kinshasa, RDC', year: '2019', hero: img('1491884662610-dfcd28f30cf5'), summary: 'Résidences Afromosia.', gallery: [img('1491884662610-dfcd28f30cf5'), img('1451187580459-43490279c0fa'), img('1496307042754-b4aa456c4a2d')], metrics: { surface: '9 500 m²', duree: '16 mois' }, overview: 'Résidences contemporaines et durables.', scope: ['Gros œuvre', 'Finitions'], challenges: ['Delais et approvisionnement'], solutions: ['Supply chain locale'], results: ['Budget maîtrisé'] },

  // INDUSTRIEL / HANGARS
  { slug: 'batiments-industriels-gmk', category: 'batiments-industriels', title: 'Bâtiments industriels GMK', location: 'Kolwezi, RDC', year: '2022', hero: img('1500530855697-b586d89ba3ee'), summary: 'Site industriel GMK.', gallery: [img('1500530855697-b586d89ba3ee'), img('1500534314209-a25ddb2bd429'), img('1500534314209-a25ddb2bd429')], metrics: { surface: '28 000 m²', duree: '26 mois' }, overview: 'Construction de bâtiments industriels GMK.', scope: ['Charpente métallique', 'Béton industriel'], challenges: ['Contraintes minières'], solutions: ['Organisation robuste'], results: ['Mise en production'] },
  { slug: 'usine-pdi', category: 'batiments-industriels', title: 'Usine PDI', location: 'RDC', year: '2020', hero: img('1500534314209-a25ddb2bd429'), summary: 'Usine de production PDI.', gallery: [img('1500534314209-a25ddb2bd429'), img('1460472178825-e5240623afd5'), img('1541976076758-95bbd1f83f25')], metrics: { surface: '13 000 m²', duree: '18 mois' }, overview: 'Unité de production industrielle.', scope: ['Structure', 'Équipements'], challenges: ['Coordination équipements'], solutions: ['Modélisation 3D'], results: ['Performance atteinte'] },
  { slug: 'atcom-hangars', category: 'hangars', title: 'ATCOM Hangars', location: 'RDC', year: '2018', hero: img('1451187580459-43490279c0fa'), summary: 'Hangars ATCOM.', gallery: [img('1451187580459-43490279c0fa'), img('1487956381093-6f0654779049'), img('1479839672679-a46483c0e7c8')], metrics: { surface: '10 000 m²', duree: '12 mois' }, overview: 'Construction de hangars logistiques.', scope: ['Structure', 'Bardage'], challenges: ['Délais'], solutions: ['Préfabrication'], results: ['Livraison rapide'] },

  // FONDATIONS PROFONDES
  { slug: 'fondations-profondes-pieux-fores', category: 'fondations-profondes', title: 'Pieux forés', location: 'RDC', year: '2017', hero: img('1519710164239-da123dc03ef4'), summary: 'Fondations sur pieux forés.', gallery: [img('1519710164239-da123dc03ef4'), img('1500530855697-b586d89ba3ee'), img('1496307042754-b4aa456c4a2d')], metrics: { surface: '—', duree: '—' }, overview: 'Travaux de fondations profondes.', scope: ['Forage', 'Bétonnage'], challenges: ['Sol hétérogène'], solutions: ['Études géotechniques'], results: ['Stabilité assurée'] },

  // TRAVAUX MARITIMES
  { slug: 'travaux-maritimes-quais', category: 'travaux-maritimes-quais', title: 'Travaux maritimes - quais', location: 'Matadi, RDC', year: '2016', hero: img('1554995207-1d2c3a6fdaa8'), summary: 'Quais et ouvrages maritimes.', gallery: [img('1554995207-1d2c3a6fdaa8'), img('1494526585095-c41746248156'), img('1487956381093-6f0654779049')], metrics: { surface: '—', duree: '—' }, overview: 'Renforcement des quais maritimes.', scope: ['Palplanches', 'Béton maritime'], challenges: ['Conditions maritimes'], solutions: ['Planification météo'], results: ['Durabilité accrue'] },
  { slug: 'jetee-secondaire', category: 'travaux-maritimes-quais', title: 'Jetée secondaire', location: 'Matadi, RDC', year: '2015', hero: img('1494526585095-c41746248156'), summary: 'Extension de jetée.', gallery: [img('1494526585095-c41746248156'), img('1554995207-1d2c3a6fdaa8'), img('1479839672679-a46483c0e7c8')], metrics: { surface: '—', duree: '—' }, overview: 'Extension et renforcement de jetée.', scope: ['Battage', 'Béton'], challenges: ['Hydrologie'], solutions: ['Ouvrages temporaires'], results: ['Exploitation améliorée'] },

  // ROUTE ET VRD
  { slug: 'chaussee-rigides-et-souples', category: 'chaussee-rigide-et-souple', title: 'Chaussées rigides et souples', location: 'RDC', year: '2019', hero: img('1496307042754-b4aa456c4a2d'), summary: 'Réalisation de chaussées.', gallery: [img('1496307042754-b4aa456c4a2d'), img('1500530855697-b586d89ba3ee'), img('1494526585095-c41746248156')], metrics: { surface: '—', duree: '—' }, overview: 'Routes en béton et en enrobés.', scope: ['Terrassement', 'Chaussée'], challenges: ['Pluviométrie'], solutions: ['Drainage renforcé'], results: ['Confort et sécurité'] },
  { slug: 'avenue-de-la-vallee', category: 'route-et-vrd', title: 'Avenue de la Vallée', location: 'Kinshasa, RDC', year: '2020', hero: img('1541976076758-95bbd1f83f25'), summary: 'Voirie urbaine.', gallery: [img('1541976076758-95bbd1f83f25'), img('1496307042754-b4aa456c4a2d'), img('1500530855697-b586d89ba3ee')], metrics: { surface: '—', duree: '—' }, overview: 'Aménagement de voirie.', scope: ['VRD', 'Chaussée'], challenges: ['Trafic'], solutions: ['Phasage'], results: ['Mobilité améliorée'] },
  { slug: 'kwamouth', category: 'route-et-vrd', title: 'Kwamouth', location: 'RDC', year: '2018', hero: img('1479839672679-a46483c0e7c8'), summary: 'Route Kwamouth.', gallery: [img('1479839672679-a46483c0e7c8'), img('1496307042754-b4aa456c4a2d'), img('1500530855697-b586d89ba3ee')], metrics: { surface: '—', duree: '—' }, overview: 'Travaux routiers.', scope: ['Terrassement', 'Ouvrages d’art'], challenges: ['Accès'], solutions: ['Logistique locale'], results: ['Accès facilités'] },
  { slug: 'masikita', category: 'route-et-vrd', title: 'Masikita', location: 'RDC', year: '2017', hero: img('1487956381093-6f0654779049'), summary: 'Route Masikita.', gallery: [img('1487956381093-6f0654779049'), img('1496307042754-b4aa456c4a2d'), img('1500530855697-b586d89ba3ee')], metrics: { surface: '—', duree: '—' }, overview: 'Voirie et réseaux divers.', scope: ['Chaussée', 'Drainage'], challenges: ['Pluie'], solutions: ['Gestion des eaux'], results: ['Durabilité'] },
]

export const findCategoryByKey = (key) => SUBCATEGORIES.find((c)=>c.key===key)
export const listProjectsByCategory = (key) => PROJECTS.filter((p)=>p.category===key)
export const findProject = (category, slug) => PROJECTS.find((p)=>p.category===category && p.slug===slug)
