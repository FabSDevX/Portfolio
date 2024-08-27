import spainFlag from "../assets/spainFlag.svg";
import usaFlag from "../assets/usaFlag.svg";
import en from "../language/en.json";
import es from "../language/es.json";

export const LANGUAGES = {
  es: {
    code: "es",
    name: "Español",
    flag: spainFlag,
  },
  en: {
    code: "en",
    name: "English",
    flag: usaFlag,
  },
};

export function getJsonLanguage(code) {
  if (code == "es") return es;
  return en;
}
