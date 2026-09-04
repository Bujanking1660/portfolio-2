import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import AudioPlayer from "./components/ui/AudioPlayer";
import { skills } from "./data/portfolioData";

function App() {
  return (
    <>
      <div className="scroll-progress" />
      <Nav />
      <main>
        <Hero />
        <Marquee items={skills} />
        <Stats />
        <Work />
        <About />
      </main>
      <Contact />
      <AudioPlayer />
    </>
  );
}

export default App;
