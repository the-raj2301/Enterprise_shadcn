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
import { Toaster } from "./components/ui/sonner";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";

function Layout() {
  const [isVisible, setIsVisible] = useState(false);

  const HandleScroll = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const HandleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster richColors position="top-right" />
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

        {/*-----------WhatsApp Button------------- */}

        <a
          href="https://wa.me/+919870615500"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 z-50 fixed md:bottom-24 transform translate-x-1/2 bottom-14 md:right-10 right-10 flex items-center justify-center rounded-md border bg-[#111111] border-slate-700 text-green-500 shadow-lg hover:shadow-green-500/50 transition-all duration-300 ease-in-out"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>

        {/* Scroll to Top Button */}

        {isVisible && (
          <button
            className="w-10 h-10 z-50 fixed md:bottom-10 bottom-14 md:right-10 transform translate-x-1/2 right-1/2 flex items-center justify-center rounded-md bg-[#111111] text-cyan-400 border border-slate-700 shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 ease-in-out"
            onClick={HandleScrollTop}
          >
            <MdOutlineKeyboardArrowUp className="h-6 w-6" />
          </button>
        )}
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
