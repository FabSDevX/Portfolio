import { useState } from "react";
import useLocalStorage from "../hook/localStorage";
import { useLanguage } from "../hook/useContext";
import { getJsonLanguage, LANGUAGES } from "../util/language";
import { useEffect } from "react";
import { useRef } from "react";

function LanguageSelector() {
  const [language, setLanguage] = useLocalStorage(
    "language",
    getJsonLanguage("en")
  );
  const selectedLanguage = language.LANGUAGE_CODE;
  const { changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleLanguage(code) {
    const languageJson = getJsonLanguage(code);
    changeLanguage(languageJson);
    setLanguage(languageJson);
    setIsOpen(false);
  }
  return (
    <div ref={selectorRef} className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer align-middle justify-between group"
      >
        <div className="flex items-center"></div>
        <img
          src={LANGUAGES[selectedLanguage].flag}
          alt={`${LANGUAGES[selectedLanguage].name} flag`}
          className="w-6 mr-1"
        />
        <span className=" text-black dark:text-white  group-hover:text-primary-color">▼</span>
      </div>

      {/* Menu */}
      {isOpen && (
        <div
          className="absolute botton-0 left-0 w-28 z-10 border-2 dark:bg-black dark:text-slate-500 border-r-4 border-slate-500
          shadow-blue-500 shadow-sm"
        >
          {Object.entries(LANGUAGES).map(([key, { code, name, flag }]) => (
            <div
              key={key}
              onClick={() => handleLanguage(code)}
              className={`cursor-pointer flex items-center p-2
                dark:text-slate-700 text-gray-300 hover:bg-slate-700 dark:hover:bg-gray-500 ${
                  selectedLanguage === code
                    ? "dark:bg-gray-300 bg-slate-950"
                    : "dark:bg-white bg-slate-900"
                }`}
            >
              <img src={flag} alt={`${name} flag`} className="w-6 mr-2" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
