import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import BlogAdd from "./components/blog/BlogAdd";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";

function App() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    setLista(JSON.parse(localStorage.getItem("academia")));
  }, []);

  useEffect(() => {
    localStorage.setItem("academia", JSON.stringify(lista));
  }, [lista]);

  const addblog = (el) => {
    el.id = lista.length + 1;
    setLista([...lista, el]);
  };
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desprenoi" element={<About />} />
          <Route path="/cursuri" element={<CourseHome />} />
          <Route path="/preturi" element={<Pricing />} />
          <Route path="/jurnal" element={<Blog blg={lista} />} />
          <Route path="/povestea" element={<BlogAdd transmit={addblog} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
