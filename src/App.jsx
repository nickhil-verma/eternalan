import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import BackgroundVideo from "./components/BackgroundVideo";
import Talent from "./components/Talent";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";
import Concerts from "./components/Concerts";
import Ticketing from "./components/Ticketing";
import Sponsor from "./components/Sponsor";
import About from "./components/About";

const Home = () => (
  <>
<BackgroundVideo url="https://assets.mixkit.co/videos/14116/14116-720.mp4" />

    <Navbar />
    <LoadingPage />
    <main className="relative z-10">
      <Hero />
      <Hero2 />
      <Hero3 />
      <Talent />
      <Sponsor/>
      <Collection />
      <Footer />
    </main>
  </>
);

const App = () => {
  return (
    <Router>
      <div className="relative w-full bg-transparent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Concerts />} />
           <Route path="/ticketing" element={<Ticketing />} />
           <Route path="/aboutus" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
