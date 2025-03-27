import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer";
import Gallery from "./components/Gallery/gallery";
import Navbar from "./components/Header/Navbar";
import ParticleBackground from "./components/BgThemes/ParticleBackground";
import { ThemeProvider } from "./components/BgThemes/theme-provider";
import Home from "./components/Home/Home";
import { Outlet } from "react-router-dom";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen w-full relative">
        <ParticleBackground />
      </div>
      <div className="absolute inset-0 z-10">
        {/* Navbar stays on every page */}
        <Navbar />

        {/* Dynamic content */}
        <Outlet />

        {/* Footer stays on every page */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={<h1 className="text-center">404 Not Found</h1>}
        />
      </Route>
    </Routes>
  );
}

export default App;
