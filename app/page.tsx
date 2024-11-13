import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Presentation from './components/Presentation';
import MisProyectos from './components/MisProyectos';
import HabilidadesYHerramientas from './components/HabilidadesYHerramientas';


const Home: React.FC = () => {
  return (
    <main>
      <NavBar />
      <Presentation />
      <AboutMe />
      <MisProyectos />
      <HabilidadesYHerramientas />
    </main>
  );
};

export default Home;
