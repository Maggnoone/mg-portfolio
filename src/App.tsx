import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ParticleBackground from './components/ui/ParticleBackground'
import WhatsAppButton from './components/ui/WhatsAppButton'

function App() {
  return (
    <div className="relative min-h-screen text-foreground">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  )
}

export default App
