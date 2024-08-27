import useLocalStorage from "../hook/localStorage";
import { useLanguage } from "../hook/useContext";
import { getJsonLanguage, LANGUAGE } from "../util/language";

function LanguageSelector() {
  const [, setLanguage] = useLocalStorage("language", getJsonLanguage("en"));
  const { changeLanguage } = useLanguage();

  function handleLanguage(code) {
    const languageJson = getJsonLanguage(code);
    setLanguage(languageJson);
    changeLanguage(languageJson);
  }
  return (
    <div>
      <select
        onChange={(e) => handleLanguage(e.target.value)}
        name="language"
        id="language"
      >
        {/* {LANGUAGE.map(([code, name, flag]) => (
          <option key={code} value={code}>
            <img src={flag} alt="Flag image" />
            {name}
          </option>
        ))} */}

        {Object.entries(LANGUAGE).map(([key, { code, name, flag }]) => (
          <option key={key} value={code}>{name}</option>
        ))}

        {/* <option value="es"></option>
        <option value="en"></option> */}
      </select>
    </div>
    //     <div className="relative inline-block text-left">
    //       <div className="group text-white rounded-md text-xs font-semibold bg-black/30 hover:bg-black/70 transition-all">
    //         <button
    //           type="button"
    //           className="inline-flex justify-start items-center w-full gap-x-2 px-3 py-2"
    //           aria-expanded="true"
    //           aria-haspopup="true"
    //           onClick={() => handleMesa(JSON.stringify(LANGUAGES))}
    //         >
    //           {/* <currentLocaleData.flag /> */}
    //           Languaje jaja
    //           {/* <ChevronIcon /> */}
    //         </button>
    //         <ul className="group-hover:block group-hover:animate-fade-down group-hover:animate-duration-200 hidden pt-0.5 absolute w-full">
    //           <li className="py-[2px]">
    //             <a className="rounded-md bg-black/30 hover:bg-black/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2">
    //               Bandera Spani
    //             </a>
    //           </li>
    //           <li className="py-[2px]">
    //             <a className="rounded-md bg-black/30 hover:bg-black/70 whitespace-no-wrap inline-flex justify-start items-center w-full gap-x-2 px-3 py-2">
    //               Bandera Spani
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
  );
}

export default LanguageSelector;
