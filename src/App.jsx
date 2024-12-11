import "./App.css";
import About from "./components/About";
import Service from "./components/Service";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// Activity 1: How to setup Navbar in App.jsx
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
