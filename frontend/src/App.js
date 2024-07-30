import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <Header/>

      <div id='aboutMe'>
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
