import './App.css'
import Card from './components/card'
import Footer from './components/footer'
import MiniCard from './components/mini-card'
// import { ModeToggle } from './components/mode-toggle'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticleBackground'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <div className='h-screen w-full relative'>
        <ParticleBackground/>
      </div>
      <div className="absolute inset-0 z-10">
        <Navbar/>
        <Card/>
        <MiniCard/>
        <Footer /> 
      </div>
    </ThemeProvider>
  )
}

export default App
