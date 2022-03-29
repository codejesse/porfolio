import "./App.css";
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Works from "./components/Works";
import Footer from "./components/Footer";
// import Contact from "./components/Contact";



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for n seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return isLoading ? (
    // If page is still loading then splash screen
    <Loader isLoading={isLoading} />
  ) : (
    <>
      <Navbar />
      <Home />
      <About />
      <Works />
      <Footer />
    </>
  );
};

export default App;
