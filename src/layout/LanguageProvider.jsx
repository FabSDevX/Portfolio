import propTypes from "prop-types";
import { createContext } from "react";
import useLocalStorage from "../hook/localStorage";
import { getJsonLanguage } from "../util/language";
import { useEffect } from "react";
import { useRef } from "react";

export const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage(
    "language",
    getJsonLanguage("en")
  );
  const languageRef = useRef({"language":language, "setLanguage":setLanguage})
  useEffect(() => {
    const fun = languageRef.current.setLanguage;
    fun(getJsonLanguage(languageRef.current.language ? languageRef.current.language.LANGUAGE_CODE : "en"));
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default LanguageProvider;
