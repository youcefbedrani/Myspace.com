import React, { useRef, useEffect, useState } from "react";
import logo1 from "/3-d-o-o.png";
// Define the type for the component's props
interface HeaderProps {
  show: string;
}

const Header: React.FC<HeaderProps> = ({ show }) => {
  const [scrolledT, setScrolledT] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const elementRef = useRef(null);

  const arr = [
    { 𝖆𝖇𝖔𝖚𝖙: "#about" },
    { Services: "#services" },
    { 𝕻𝖗𝖔𝖏𝖊𝖈𝖙𝖘: "#projects" },
    { Blogs: "#blogs" },
    { "𝕷𝖊𝖙'𝖘 𝖌𝖊𝖙 𝖎𝖓 𝖙𝖔𝖚𝖈𝖍": "#contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // console.log("the width is : ", width);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (width <= 680) {
      // For small screens
      setScrolledT(scrollPosition > 6801);
    } else {
      // For larger screens
      setScrolledT(scrollPosition > 5510);
    }
  };

  useEffect(() => {
    if (elementRef.current) {
      // Get the width of the element
      setWidth(elementRef.current.clientWidth);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return show === "yes" ? (
    <div
      ref={elementRef}
      className="flex justify-end fixed items-center space-x-6 mt-2 text-lg top-8 right-14 backdrop-blur-lg bg-white/30 rounded-lg px-4 py-2 shadow-lg z-10"
    >
      {arr.map((item, index) => {
        const [key, value] = Object.entries(item)[0];
        return (
          <a
            key={index}
            href={value}
            className={`${scrolledT ? "text-white" : "text-black"}`}
          >
            {key}
          </a>
        );
      })}
    </div>
  ) : (
    <div ref={elementRef}>
      <div className="fixed top-8 right-4 z-20">
        <button
          onClick={toggleMenu}
          className={`${
            scrolledT ? "text-white" : "text-black"
          } text-4xl w-14 h-8 mt-2`}
        >
          ☰
        </button>
      </div>
      <div
        className={`${menuOpen ? "block" : "hidden"} ${
          menuOpen ? "menu-open" : ""
        } menu flex fixed top-[80px] flex-col right-6 z-20 p-4 rounded-lg shadow-lg `}
      >
        {arr.map((item, index) => {
          const [key, value] = Object.entries(item)[0];
          return (
            <a
              key={index}
              href={value}
              className={`${
                scrolledT ? "text-white" : "text-black"
              } hover:text-blue-500 transition-colors duration-300`}
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {key}
            </a>
          );
        })}
        <img src={logo1} alt="logo" className="mx-auto w-24 h-8 mt-24" />
      </div>
    </div>
  );
};

export default Header;
