import Hero from "../seccion/Hero";
import GeneralLayout from "../layout/GeneralLayout";
import AboutMe from "../seccion/AboutMe";
import Project from "../seccion/Project";

function Landpage() {
  return (
    <GeneralLayout>
      <main>
        <Hero />
        <AboutMe/>
        <Project/>
      </main>
    </GeneralLayout>
  );
}

export default Landpage;
