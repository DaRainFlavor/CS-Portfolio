import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Extracurricular } from "@/components/sections/extracurricular";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Education />
        <Research />
        <Projects />
        <Extracurricular />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
