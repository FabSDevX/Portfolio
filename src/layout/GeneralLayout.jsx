import propTypes from "prop-types";
import Navbar from "../component/navBar";

function GeneralLayout({ children }) {
  return (
    <div>
      <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"></div>
      <Navbar/>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  );
}

GeneralLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default GeneralLayout;
