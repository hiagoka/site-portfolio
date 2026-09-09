import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
