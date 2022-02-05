import { useState, useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Current from './components/Current/Current'

import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [state, setState] = useState('contact')

  return (
    <div id='top' className={`${themeName} app`}>
      <main>
        <About />
        <br />
        <br />
        <br />

        {state === 'skills' ? (
          <a
            href='#.'
            onClick={() => setState('skills')}
            className='link link--nav--pressed'
          >
            Skills
          </a>
        ) : (
          <a
            href='#.'
            onClick={() => setState('skills')}
            className='link link--nav'
          >
            Skills
          </a>
        )}
        {'       |       '}

        {state === 'experience' ? (
          <a
            href='#.'
            onClick={() => setState('experience')}
            className='link link--nav--pressed'
          >
            Experience
          </a>
        ) : (
          <a
            href='#.'
            onClick={() => setState('experience')}
            className='link link--nav'
          >
            Experience
          </a>
        )}
        {'       |       '}

        {state === 'projects' ? (
          <a
            href='#a'
            onClick={() => setState('projects')}
            className='link link--nav--pressed'
          >
            Projects
          </a>
        ) : (
          <a
            href='#a'
            onClick={() => setState('projects')}
            className='link link--nav'
          >
            Projects
          </a>
        )}
        {'       |       '}

        {state === 'current' ? (
          <a
            href='#a'
            onClick={() => setState('current')}
            className='link link--nav--pressed'
          >
            Current
          </a>
        ) : (
          <a
            href='#a'
            onClick={() => setState('current')}
            className='link link--nav'
          >
            Current
          </a>
        )}

        {state === 'skills' && <Skills />}
        {state === 'experience' && <Experience />}
        {state === 'projects' && <Projects />}
        {state === 'current' && <Current />}
        <Footer />
      </main>
    </div>
  )
}

export default App
