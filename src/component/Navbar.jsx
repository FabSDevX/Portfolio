import { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import { useLanguage } from "../hook/useContext";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import NavbarMobile from "./NavBarMobile";

function Navbar() {
  const [isMinimumSize, setIsMinimumSize] = useState(window.innerWidth < 700);
  const { language } = useLanguage();
  const headerNavbar = language.HEADER_NAVBAR;

  useEffect(() => {
    const handleWidth = () => {
      if (window.innerWidth < 700) {
        setIsMinimumSize(true);
      } else {
        setIsMinimumSize(false);
      }
    };
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <header className="fixed left-0 right-0 top-0 w-full z-50">
      <div className="absolute top-0 w-full h-full -z-10 blur-md dark:bg-bg-dark-theme bg-slate-100"></div>
      <div className="flex justify-between py-3 px-4 lg:px-0 place-items-center max-w-5xl mx-auto">
        <a
          translate="no"
          className="dark:text-white lg:text-3xl md:text-xl text-2xl cursor-pointer hover:text-primary-color"
          onClick={scrollToTop}
        >
          Fabricio Porras
        </a>
        {!isMinimumSize ? (
          <nav className="flex sm:space-x-1 md:space-x-4 place-items-center">
            {headerNavbar.map(([title, id]) => (
              <Link
                className="px-1 py-1 cursor-pointer dark:text-white text-slate-700 font-medium hover:text-primary-color hover:border-b-2 hover:border-b-primary-color "
                to={id}
                key={id}
                spy={true}
                smooth={true}
                offset={-130}
                duration={100}
              >
                {title}
              </Link>
            ))}
            <LanguageSelector />
            <ThemeSelector />
          </nav>
        ) : (
          <NavbarMobile language={language} />
        )}
      </div>
    </header>
  );
}
export default Navbar;
