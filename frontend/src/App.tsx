import { 
  Suspense, 
  lazy 
} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Tailspin } from 'ldrs/react';
import 'ldrs/react/Tailspin.css';

const Header = lazy(() => import("./components/header/Header"));
const Home = lazy(() => import("./pages/home/Home"));
const Skills = lazy(() => import("./pages/skills/Skills"));
const Projects = lazy(() => import("./pages/projects/Projects"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

function App() {
  const color: string = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-surface")
    .trim();

  return (
    <BrowserRouter>
      <Suspense 
        fallback={<Tailspin
          size="40"
          stroke="5"
          speed="0.9"
          color={color}
        />}>
        <Header/>
      </Suspense>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={
            <Suspense 
              fallback={<Tailspin
                size="40"
                stroke="5"
                speed="0.9"
                color={color}
              />}>
              <Home/>
            </Suspense>}/>
          <Route path="/projects" element={
            <Suspense 
              fallback={<Tailspin
                size="40"
                stroke="5"
                speed="0.9"
                color={color} 
              />}>
              <Projects/>
            </Suspense>}/>
          <Route path="/skills" element={
            <Suspense 
              fallback={<Tailspin
                size="40"
                stroke="5"
                speed="0.9"
                color={color} 
              />}>
              <Skills/>
            </Suspense>}/>
          <Route path="*" element={
            <Suspense 
              fallback={<Tailspin
                size="40"
                stroke="5"
                speed="0.9"
                color={color} 
              />}>
              <NotFound/>
            </Suspense>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
