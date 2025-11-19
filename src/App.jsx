import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ProjectCategory from './pages/ProjectCategory'
import ProjectDetail from './pages/ProjectDetail'
import ResourcesPersonnel from './pages/ResourcesPersonnel'
import ResourcesEngins from './pages/ResourcesEngins'
import Contact from './pages/Contact'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:category" element={<ProjectCategory />} />
      <Route path="/projects/:category/:slug" element={<ProjectDetail />} />
      <Route path="/resources/personnel" element={<ResourcesPersonnel />} />
      <Route path="/resources/engins" element={<ResourcesEngins />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
