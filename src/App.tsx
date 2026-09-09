import { Frame, Header, Ticker } from "@/components/layout";
import { About, Contact, Experience, Hero, Projects } from "@/components/sections";

export default function App() {
  return (
    <div className="min-h-screen text-fg">
      <Frame />
      <Header />
      <Ticker />
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
