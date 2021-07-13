import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact'
import './Assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Work />
      <Contact />
    </main>
  );
}

export default App;
