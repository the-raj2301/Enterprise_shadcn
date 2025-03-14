import './App.css'
import Card from './components/card'
// import { ModeToggle } from './components/mode-toggle'
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'

function App() {

  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Navbar/>
      <div className="absolute right-2 top-2">
        {/* <ModeToggle /> */}
      </div>
      <Card/>  
    </ThemeProvider>
  )
}

export default App
