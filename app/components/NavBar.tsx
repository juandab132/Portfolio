'use client'; 
import React from 'react';
import ThemeToggle from './ThemeToggle';

const NavBar: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-customTeal dark:bg-gray-800 py-4 text-white sticky top-0 z-50 shadow-lg transition-all duration-300 hover:bg-[#5d8991] dark:hover:bg-gray-700">
      <section className="flex justify-between items-center px-4">
        <ul className="flex flex-wrap justify-center gap-6 text-sm">
          <li>
            <a 
              href="#home"
              onClick={(e) => handleClick(e, 'home')}
              className="relative py-2 px-1 transition-all duration-300 hover:text-gray-200
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full font-serif"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about"
              onClick={(e) => handleClick(e, 'about')}
              className="relative py-2 px-1 transition-all duration-300 hover:text-gray-200
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full font-serif"
            >
              Sobre mi
            </a>
          </li>
          <li>
            <a 
              href="#projects"
              onClick={(e) => handleClick(e, 'projects')}
              className="relative py-2 px-1 transition-all duration-300 hover:text-gray-200
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full font-serif"
            >
              Mis proyectos
            </a>
          </li>
          <li>
            <a 
              href="#skills"
              onClick={(e) => handleClick(e, 'skills')}
              className="relative py-2 px-1 transition-all duration-300 hover:text-gray-200
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full font-serif"
            >
              Habilidades y herramientas
            </a>
          </li>
          <li>
            <a 
              href="#experience"
              onClick={(e) => handleClick(e, 'experience')}
              className="relative py-2 px-1 transition-all duration-300 hover:text-gray-200
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full font-serif"
            >
              Experiencia laboral y académica
            </a>
          </li>
          <li>
            <a 
              href="#contact"
              onClick={(e) => handleClick(e, 'contact')}
              className="relative py-2 px-1 transition-all duration-300 hover:text-gray-200
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-white 
              after:transition-all after:duration-300 hover:after:w-full font-serif"
            >
              Contacto
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </section>
    </nav>
  );
};

export default NavBar;