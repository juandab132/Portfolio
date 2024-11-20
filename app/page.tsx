import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Presentation from './components/Presentation';
import MisProyectos from './components/MisProyectos';
import HabilidadesYHerramientas from './components/HabilidadesYHerramientas';
import ExperienciaLaboral from './components/ExperienciaLaboral';
import Contacto from './components/Contacto';


const Home: React.FC = () => {
  return (
    <main>
      <NavBar />
      <Presentation />
      <AboutMe />
      <MisProyectos />
      <HabilidadesYHerramientas />
      <ExperienciaLaboral />
      <Contacto/>

    </main>
  );
};

export default Home;
