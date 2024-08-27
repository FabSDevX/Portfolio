import { useContext } from "react";
import { LanguageContext } from "../layout/LanguageProvider";

export function useLanguage() {
  return useContext(LanguageContext);
}
