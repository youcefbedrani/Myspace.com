import React, { useRef, useState, useEffect } from "react";
import "./App.scss";
import "./styles/tailwind.css";
import logo3 from "../public/2-e.png";
import logo2 from "../public/1-e.png";
import logo4 from "../public/3-d-o.png";
import BackgroundVideo from "./components/js/BackgroundVideo";
import Header from "./components/js/Header";
import Macos from "./components/js/Macos";
import Skills from "./components/js/Skills";
import Projects from "./components/js/Projects";
import Footer from "./components/js/Footer";
import Services from "./components/js/Services";
import Blog from "./components/js/Blog";
import Contact from "./components/js/Contact";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrolledV, setScrolledV] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth); // Initialize with current window width
  const elementRef = useRef<HTMLDivElement | null>(null);

  // Handle resizing
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle scrolling

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (width <= 680) {
        // For small screens
        if (scrollPosition > 400 && scrollPosition <= 6800) {
          setScrolled(true);
          setScrolledV(false);
        } else if (scrollPosition > 6800) {
          setScrolledV(true);
        } else {
          setScrolled(false);
          setScrolledV(false);
        }
      } else {
        // For larger screens
        if (scrollPosition > 400 && scrollPosition <= 5510) {
          setScrolled(true);
          setScrolledV(false);
        } else if (scrollPosition > 5510) {
          setScrolledV(true);
        } else {
          setScrolled(false);
          setScrolledV(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Add width to dependency array to update on resize

  return (
    <div ref={elementRef} className="relative">
      <BackgroundVideo />

      <div className="Header">
        <div className="text">
          <Header show="yes" />
        </div>
        <div className="show">
          <Header show="no" />
        </div>
        <div className="logo">
          <img
            src={logo2}
            alt="logo2"
            className={`w-28 h-28 fixed top-0 left-0 transition-opacity duration-500 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={logo3}
            alt="logo3"
            className={`w-32 h-30 fixed top-0 left-2 ml-4 transition-opacity duration-500 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
          <img
            src={logo4}
            alt="logo4"
            className={`w-32 h-30 fixed top-0 left-2 ml-4 transition-opacity duration-500 ${
              scrolledV ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
        <main className="w-full min-h-screen flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center pt-14">
            {/* About Me */}
            <section id="about"></section>
            <Macos />
            {/* Skills */}
            <section className="h-full pt-10 mt-10 text-center">
              <Skills />
            </section>
            {/* Projects */}
            <div className="w-full flex-row">
              <section id="projects"></section>
              <Projects />
            </div>
            <div className="w-full flex-row">
              <section id="services" className="h-0"></section>
              <Services />
            </div>
            <div className="w-full flex-row">
              <section id="blogs"></section>
              <Blog />
            </div>
            <div className="w-full flex-row">
              <section id="contact"></section>
              <Contact />
            </div>
            <section className="w-full flex-row">
              <Footer />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
