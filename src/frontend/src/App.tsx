import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Curiosity } from "@/components/sections/Curiosity";
import { Education } from "@/components/sections/Education";
import { EngineeringThinking } from "@/components/sections/EngineeringThinking";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Leadership } from "@/components/sections/Leadership";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Toaster richColors position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <EngineeringThinking />
        <Skills />
        <Education />
        <Leadership />
        <Curiosity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
