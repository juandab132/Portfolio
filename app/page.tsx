import React from 'react';

export default function AboutMeSection() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-700 flex flex-col items-center">

      <header className="bg-customTeal text-white py-4 w-full">
        <nav className="container mx-auto flex justify-end items-center px-4 md:px-8">
          <button className="block md:hidden text-white"> 
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18m-9 6h9" />
            </svg>
          </button>
          <ul className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li><a href="#" className="hover:text-teal-300">Home</a></li>
            <li><a href="#" className="hover:text-teal-300">Sobre mi</a></li>
            <li><a href="#" className="hover:text-teal-300">Mis proyectos</a></li>
            <li><a href="#" className="hover:text-teal-300">Habilidades y herramientas</a></li>
            <li><a href="#" className="hover:text-teal-300">Experiencia laboral y académica</a></li>
          </ul>
        </nav>
      </header>

      <main className="bg-white text-center shadow-lg rounded-lg p-6 pt-12 md:p-12 w-full">
      <h1 className="text-4xl font-bold mb-4">
        ¡Hola! Soy Juan David, estudiante de Ingeniería de Software y amante de la música. Explorador del código y de los acordes. Curioso por naturaleza, optimista, aficionado a los videojuegos y al ejercicio.
      </h1>
      </main>



      <section className="container mx-auto text-left bg-gray-200 rounded-lg p-8 mt-9 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">

        <img
          src="ruta-de-tu-imagen.jpg"
          alt="Foto de Juan David"
          className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
        />
        <article>
          <h2 className="text-3xl font-bold mb-2">SOBRE MI</h2>
          <h3 className="text-xl font-semibold mb-4">¿Quién es Juan David?</h3>
          <p className="mb-4">
            Desarrollador de software en formación, con pasión por el aprendizaje continuo.
          </p>
          <p className="mb-4">
            Como estudiante de quinto semestre de Ingeniería de Software, me motiva la resolución de problemas y la creación de soluciones tecnológicas eficientes. Aunque mi conocimiento es diverso, tengo un interés particular en el desarrollo web y la experiencia del usuario.
          </p>
          <p className="mb-4">
            Mi enfoque está en mejorar en cada proyecto, poniendo atención a los detalles y buscando la simplicidad en el diseño y la funcionalidad.
          </p>
          <p className="font-semibold mt-4">Ponte en contacto!</p>
        </article>

      </section>
      
    </div>
  );
}
