import './App.css'
import { ThemeProvider } from "./common/contexts/ThemeContext";
import Hero from "./sections/Hero/Hero";
import Projects from './sections/Projects/Projects';


function App() {
  return (
    <ThemeProvider>
      <Hero/> 
      <Projects />
    </ThemeProvider>
  );
}

export default App;
