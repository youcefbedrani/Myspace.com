import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles/tailwind.css";
import { EvervaultCard, Icon } from "./components/ui/evervault-card";
import logo3 from "../public/2-e.png";
import logo2 from "../public/1-e.png";
import BackgroundVideo from "./components/js/BackgroundVideo";
import Header from "./components/js/Header";

function App() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 400) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <BackgroundVideo />

      <div className="Header">
        <Header />
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
        </div>
      </div>

      {/* <div className="flex items-center justify-center min-h-screen">
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard text="hover" />

          <h2 className="dark:text-white text-black mt-4 text-sm font-light">
            Hover over this card to reveal an awesome effect. Running out of copy
            here.
          </h2>
          <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
            Watch me hover
          </p>
        </div>
      </div> */}
      <div className="w-80 h-80 flex justify-center items-center min-h-screen">
        <div>
          <p>Hi there, this is one of the best worlds of web dev and mobile app.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
