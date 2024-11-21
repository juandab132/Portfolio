import React from 'react';

const ProjectCard: React.FC<{ title: string; description: string; repoLink: string }> = ({ title, description }) => {
    return (
        <main className="mb-12">
          <h3 className="text-xl font-serif mb-3 text-black font-semibold mt-10">{title}</h3>
          <p className="text-sm mb-4 leading-relaxed text-gray-800 font-serif">{description}</p>
          <a
            href="https://github.com/juandab132"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#607875] text-white px-4 py-2 text-sm hover:bg-[#4a615e] transition-colors"
          >
            Ver repositorio Github
          </a>
        </main>
    );
};

const MisProyectos: React.FC = () => {
  const projects = [
    {
      title: "Control de hogar automatizado",
      description: "Desarrollé una interfaz funcional y sencilla conectada a una base de datos con Django para gestionar dispositivos vinculados al hogar. El sistema permite controlar luces revisar las cámaras y un sistema de bloqueo todo, con una interfaz amigable. Ideal para automatizar tareas cotidianas, integrando tecnología con comodidad.",
      repoLink: "#"
    },
    {
      title: "Reproductor de Música en Python",
      description: "Desarrollé un reproductor de música básico utilizando Python y la biblioteca Pygame para gestionar la reproducción de archivos de audio. El proyecto incluye la capacidad de crear y manejar una lista de reproducción, saltar entre canciones, pausar, reanudar y detener la música. Es una aplicación funcional con una estructura simple para efectiva para gestionar canciones desde la terminal.",
      repoLink: "#"
    },
    {
      title: "Red Social en Python con Tkinter",
      description: "Desarrollé una aplicación de red social básica utilizando Python y Tkinter. La aplicación permite registrar usuarios, publicar contenidos, realizar publicaciones y gestionar modificaciones. También incluye la funcionalidad para eliminar publicaciones cuando uno quiera, y un sistema de publicaciones almacenadas en un útil binario. Se utiliza una interfaz gráfica simple donde los usuarios pueden interactuar con todas estas funciones desde una ventana.",
      repoLink: "#"
    },
    {
      title: "Pagina de Reseñas Fender y Gibson",
      description: "Desarrollé una página de reseña detallada sobre las guitarras Fender Stratocaster y Gibson Les Paul utilizando HTML y TailwindCSS. La página incluye una navegación básica con enlaces a más reseñas, artículos y recomendaciones. Cada sección presenta descripciones completas de ambos modelos, destacando sus características, sonoridad y sentido, junto con imágenes representativas.",
      repoLink: "#"
    }
  ];

  return (
    <section id="projects" className="bg-[#9BBFC5] py-16">
      <header className="max-w-6xl mx-auto px-6">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          <main>
            <h2 className="text-2xl font-serif mb-4 text-black font-semibold mt-2">MIS PROYECTOS</h2>
            {projects.slice(0, 2).map((project, index) => (
              <main key={index}>
                <ProjectCard {...project} />
              </main>
            ))}
          </main>
          <main className="mt-8 md:mt-1">
            <p className="text-lg font-serif mb-8 text-black font-semibold">
              Una selección de proyectos personales que e realizado
            </p>
            {projects.slice(2, 4).map((project, index) => (
              <main key={index}>
                <ProjectCard {...project} />
              </main>
            ))}
          </main>    
        </main>
      </header>
    </section>
  );
};

export default MisProyectos;