//import Head from 'next/head'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Main from '../../components/Main'
import Navbar from '../../components/Navbar'



export default function Home() {
  return (
    <div>
      <Navbar/>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
