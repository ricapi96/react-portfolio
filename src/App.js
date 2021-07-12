import React, { Component } from 'react';
import "./App.css";
import Sidebar from './components/Sidebar';
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div id= "colorlib page">
        <div id= "container-wrap">
          <Sidebar></Sidebar>
          <div id= "colorlib-main">
            <Header></Header>
            <About></About>
            <Work></Work>
            <Contact></Contact>
            <Footer></Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
