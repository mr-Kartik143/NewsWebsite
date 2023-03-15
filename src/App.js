import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heading from "./Component/Heading/Heading";
import Navbar from "./Component/Navbar/Navbar";
import News from "./Component/News/News";
import Footer from "./Component/Footer/Footer";

function App() {
  function call(){
    console.log("ddfgf")
  }
  return (
    <Router>
      <Heading />
      <Navbar />
      <Routes>
        <Route path="/" element=<News /> />
        <Route path="/india" element=<News/> />
        <Route path="/business" element=<News/> />
        <Route path="/entertainment" element=<News/> />
        <Route path="/technology" element=<News/> />
        <Route path="/science" element=<News/> />
        <Route path="/sports" element=<News/> />
        <Route path="/health" element=<News/> />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
