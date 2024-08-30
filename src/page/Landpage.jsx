import Hero from "../seccion/Hero";
import GeneralLayout from "../layout/GeneralLayout";
import AboutMe from "../seccion/AboutMe";
import Project from "../seccion/Project";
import Skills from "../seccion/Skills";

function Landpage() {
  return (
    <GeneralLayout>
      <main>
        <Hero />
        <AboutMe/>
        <Project/>
        <Skills/>
      </main>
    </GeneralLayout>
  );
}

export default Landpage;
