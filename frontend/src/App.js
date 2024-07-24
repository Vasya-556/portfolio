import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <div id='about-me'>
        <AboutMe/>
      </div>
      
      <div id='skills'>
        <Skills/>
      </div>

      <div id='projects'>
        <Projects/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
