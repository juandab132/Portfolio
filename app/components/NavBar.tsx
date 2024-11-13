// components/NavBar.tsx
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-[#c3dbd9] py-2 text-black">
      <ul className="flex flex-wrap justify-center gap-4 px-4 text-sm">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#projects">Mis proyectos</a></li>
        <li><a href="#skills">Habilidades y herramientas</a></li>
        <li><a href="#experience">Experiencia laboral y académica</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
