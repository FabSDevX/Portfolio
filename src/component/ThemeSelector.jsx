import useLocalStorage from "../hook/localStorage";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

function ThemeSelector() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const isDark = theme === "dark";
  function handleTheme() {
    const themeValue = theme == "dark" ? "light" : "dark";
    const rootElement = document.documentElement;
    setTheme(themeValue);
    rootElement.setAttribute("data-theme", themeValue);
  }
  return (
    <div
      onClick={handleTheme}
      className={`rounded-xl space-x-0 flex w-16 cursor-pointer
        ${
          isDark
            ? "bg-gradient-to-r from-purple-500 to-70% to-yellow-400"
            : "bg-gradient-to-r from-yellow-300 from-50% to-purple-500"
        }`}
    >
      <div
        className={`transition-transform duration-500 
          ${isDark ? "translate-x-0" : "translate-x-8"}`}
      >
        <IoIosMoon
          size={32}
          color="black"
          className={`transition-opacity duration-500
            ${isDark ? "opacity-100" : "opacity-30"}`}
        />
      </div>
      <div
        className={`transition-transform duration-500 
          ${isDark ? "translate-x-0" : "-translate-x-8"}`}
      >
        <IoIosSunny
          size={32}
          color={"black"}
          className={`transition-opacity duration-500
            ${isDark ? "opacity-30" : "opacity-100"}`}
        />
      </div>
    </div>
  );
}

export default ThemeSelector;
