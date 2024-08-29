import Hero from "../seccion/Hero";
import GeneralLayout from "../layout/GeneralLayout";
import AboutMe from "../seccion/AboutMe";

function Landpage() {
  return (
    <GeneralLayout>
      <main>
        <Hero />
        <AboutMe />
      </main>
    </GeneralLayout>
  );
}

export default Landpage;
