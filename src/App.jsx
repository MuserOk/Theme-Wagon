import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Details from "./pages/Details";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";


export default function App() {

  return (
    <>
      <header className="flex justify-center gap-10 items-center">
        <img className="w-26" src="/themewagon/navbar/logoPresonalizado.png" alt="logo" />
        <Navbar />
        <div className="flex gap-4 items-center w-50 justify-end">
          <a className="text-blue-400 font-medium" href="#">Log In</a>
          <button type="button" className=" bg-white shadow-[0px_0px_0.9px] py-1 px-2 rounded-md">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500 font-medium">
              Sign Up
            </span>
          </button>
        </div>
      </header>
      <main className="bg-[url('/themewagon/background_elements.svg')] bg-cover h-full w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/features" element={<Features />} />
          <Route path="/details" element={<Details />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer><a href="https://github.com/MuserOk/Theme-Wagon">by <strong className="text-blue-400 font-black animate-pulse">MuserOk</strong></a></footer>
    </>
  )
}

