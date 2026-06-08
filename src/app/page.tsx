import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BackgroundEffects from "@/components/backgroundeffects";
import ScrollProgress from "@/components/scrollprogress";
import CustomCursor from "@/components/customcursor";

export default function Home() {
  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      <ScrollProgress />
      <CustomCursor />
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
