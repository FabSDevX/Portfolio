import propTypes from "prop-types";

function GeneralLayout({ children }) {
  return (
    <div className="dark:bg-bg-dark-theme min-h-screen">
      <div className="max-w-5xl mx-auto px-8 lg:px-2">{children}</div>
    </div>
  );
}

GeneralLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default GeneralLayout;
