import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      
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
