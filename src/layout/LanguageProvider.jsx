import propTypes from "prop-types";
import { createContext } from "react";
import useLocalStorage from "../hook/localStorage";
import { getJsonLanguage } from "../util/language";

export const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage("language", getJsonLanguage("en"));

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
