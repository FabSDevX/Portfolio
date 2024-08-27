import { useLanguage } from "../hook/useContext";
import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";

function Navbar() {
  const { language } = useLanguage();
  const headerNavbar = language.HEADER_NAVBAR;
  console.log(headerNavbar);

  console.log(language);

  return (
    <header>
      <div className="flex justify-between py-8 place-items-center">
        <a
          translate="no"
          className="dark:text-white lg:text-3xl md:text-xl"
          href=""
        >
          Fabricio Porras
        </a>
        <nav className="flex sm:space-x-1 md:space-x-4 place-items-center">
          {headerNavbar.map(([title, url]) => (
            <a
              key={url}
              href={url}
              className="px-1 py-1 dark:text-white text-slate-700 font-medium hover:text-primary-color hover:border-b-2 hover:border-b-primary-color "
            >
              {title}
            </a>
          ))}
          <LanguageSelector />
          <ThemeSelector />
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
