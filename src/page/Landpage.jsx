import Navbar from "../component/navBar";
import Hero from "../seccion/Hero";
import GeneralLayout from "../layout/GeneralLayout";

function Landpage() {
  return (
    <GeneralLayout>

        <Navbar />
        <div>
          <Hero />
        </div>
    </GeneralLayout>
  );
}

export default Landpage;
