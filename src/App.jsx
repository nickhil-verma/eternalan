import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import BackgroundVideo from "./components/BackgroundVideo";
import Talent from "./components/Talent";
import Collection from "./components/Collection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative w-full bg-transparent">
      <BackgroundVideo />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Hero2 />
        <Hero3 />
        <Talent />
        <Collection/>
        <Footer/>
         
      </main>
    </div>
  );
};


export default App;
