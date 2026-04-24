import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import About     from './components/About'
import Skills    from './components/Skills'
import Experience from './components/Experience'
import Projects  from './components/Projects'
import ArjunChat from './components/ArjunChat'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <ArjunChat />
    </>
  )
}