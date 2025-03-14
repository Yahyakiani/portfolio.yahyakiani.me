import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Internships from './components/Internships';
import Hackathons from './components/Hackathons';
import ResearchPapers from './components/ResearchPapers';
import Contact from './components/Contact';
import Separator from './components/Separator';
import Skills from './components/Skills';
import Projects from './components/Projects';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Separator />
      <About />
      <Separator />
      <Experience />
      <Separator />
      <Separator />
      <Hackathons />
      <Separator />
      <Projects />
      <Separator />
      <Skills />
      <Separator />
      <ResearchPapers />
      <Separator />
      <Contact />
    </div>
  );
}

export default App;
