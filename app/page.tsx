
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-700">
      <header className="bg-customTeal text-white py-4">
        <nav className="container mx-auto flex justify-between md:justify-end items-center">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li><a href="#" className="hover:text-teal-300">Home</a></li>
            <li><a href="#" className="hover:text-teal-300">Sobre mi</a></li>
            <li><a href="#" className="hover:text-teal-300">Mis proyectos</a></li>
            <li><a href="#" className="hover:text-teal-300">Habilidades y herramientas</a></li>
            <li><a href="#" className="hover:text-teal-300">Experiencia laboral y académica</a></li>
          </ul>
        </nav>
      </header>

      <main className=" container mx-auto py-16 text-center mt-9">
      <h1 className="text-4xl font-bold mb-4">¡Hola! Soy Juan David, estudiante de Ingeniería de Software y amante de la música. Explorador del código y de los acordes. Curioso por naturaleza. Optimista. Aficionado a los videojuegos y al ejercicio</h1>
      </main>
    </div>                                                                  
  );
}
