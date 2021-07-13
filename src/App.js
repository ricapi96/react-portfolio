import React, { Component } from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
        <div id= "container-wrap">
          <Navbar></Navbar>
          <div id= "main-page">
            <Header></Header>
            <About></About>
            <Work></Work>
            <Footer></Footer>
          </div>
        </div>
    );
  }
}

export default App;
