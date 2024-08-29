import { GoDotFill } from "react-icons/go";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { useLanguage } from "../hook/useContext";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaHandPointDown } from "react-icons/fa";
import herobg from "../assets/herobg.svg";
import HeroButton from "../component/HeroButton";
import { useState } from "react";
import { useEffect } from "react";

function Hero() {
  const [schollPosition, setScrollPosition] = useState(window.scrollY);
  const isHanded = schollPosition == 0;

  const { language } = useLanguage();
  const openToWork = language.HERO_IS_OPEN_TO_WORK;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="flex relative items-center justify-between text-red-400 min-h-screen dark:text-white font-semibold fade-in-up px-4 gap-5 lg:px-0">
      {isHanded ? (
        <div className="absolute bottom-2 left-2/4 hand-touches">
          <FaHandPointDown className="fill-primary-color" size={32} />
        </div>
      ) : (
        <div className="absolute bottom-2 left-2/4 vanish-hand">
          <FaHandPointDown className="fill-primary-color" size={32} />
        </div>
      )}
      <div>
        <div className="flex flex-col gap-8 relative py-8">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-5xl">
            {language.HERO_GREETINGS}
            <br />
            Fabricio Porras
          </h1>
          <h2 className="dark:text-primary-color lg:text-4xl md:text-3xl sm:text-2xl text-4xl font-medium">
            Software Developer
          </h2>
          <div className="absolute bottom-0 right-0 -rotate-12 ">
            {openToWork ? (
              <p className="flex gap-1 items-center text-dark-text-paragraph-color pulsation-scale">
                <span className="w-3 ">
                  <GoDotFill className="fill-green-500" />
                </span>
                {language.HERO_OPEN_TO_WORK}
              </p>
            ) : (
              <p className="flex gap-1 items-center text-dark-text-paragraph-color pulsation-scale">
                <span className="w-3 ">
                  <GoDotFill className="fill-red-500" />
                </span>
                {language.HERO_NOT_OPEN_TO_WORK}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap mt-5 gap-5 sm:gap-3 ">
          <HeroButton
            Icon={IoDocumentTextSharp}
            text={"Resume"}
            action={
              "https://drive.google.com/file/d/1U4r5vf6stAyl_5dStgQKkhUlfIfvjRcF/view?usp=sharing"
            }
          />
          <HeroButton
            Icon={BiLogoLinkedin}
            text={"LinkedIn"}
            action={"https://www.linkedin.com/in/fabricioporras/"}
          />
          <HeroButton
            Icon={FiGithub}
            text={"GitHub"}
            action={"https://github.com/FabSDevX"}
          />
        </div>
      </div>
      <div className="hidden sm:flex flex-col justify-center items-center gap-2">
        <figure className="w-64 md:w-80 lg:w-96">
          <img src={herobg} alt="hero background" />
        </figure>
        <span className="text-primary-color font-medium text-sm md:text-lg lg:text-xl">
          {language.HERO_IMAGE_BOTTON_TEXT}
        </span>
      </div>
    </section>
  );
}

export default Hero;
