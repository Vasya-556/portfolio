import { Header } from "./components";
import { 
  Home, 
  Skills, 
  Projects,
  NotFound
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
