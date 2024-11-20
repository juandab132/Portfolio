// components/Presentation.tsx
import React from 'react';

const Presentation: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-[#e8f4f2] to-[#9BBFC5] py-16">
      <main className="max-w-4xl mx-auto px-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-black">
          ¡Hola! Soy Juan David, estudiante de Ingeniería de Software y amante de la
          música. Explorador del código y de los acordes. Curioso por naturaleza.
          Optimista. Aficionado a los videojuegos y al ejercicio
        </h1>
      </main>
    </section>
  );
};

export default Presentation;