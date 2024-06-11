import './App.css';
import NavigationBar from './components/NavigationBar';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import LandingPage from './pages/LandingPage';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div className='flex flex-col w-full h-full overflow-auto'>
      <NavigationBar />
      <LandingPage />
      <Skills />
      <Experience />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
