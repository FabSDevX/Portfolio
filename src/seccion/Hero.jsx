import { GoDotFill } from "react-icons/go";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { useLanguage } from "../hook/useContext";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaHandPointDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import { getDocumentById } from "../services/firebase/firebaseFuntions";
import bgHero from "../assets/bgHero.jpg";
import HeroButton from "../component/HeroButton";

function Hero() {
  const [schollPosition, setScrollPosition] = useState(window.scrollY);
  const isHanded = schollPosition == 0;

  const { language } = useLanguage();
  const [isOpenToWork, setIsOpenToWork] = useState(true);

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

  const scrollToBotton = () => {
    animateScroll.scrollToBottom();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const documentSettings = await getDocumentById('settings', 'general');
        setIsOpenToWork(documentSettings.isOpenToWork)
      } catch (error) {
        console.error("Error fetching settings data ", error);
      }
    }
    fetchData();
  }, [])
  return (
    <section className="flex relative items-center justify-between text-red-400 min-h-screen dark:text-white font-semibold fade-in-up px-4 gap-5 lg:px-0">
      {isHanded ? (
        <div onClick={scrollToBotton} className="absolute cursor-pointer bottom-2 left-2/4 hand-touches">
          <FaHandPointDown className="fill-primary-color" size={32} />
        </div>
      ) : (
        <div onClick={scrollToBotton} className="absolute cursor-pointer bottom-2 left-2/4 vanish-hand">
          <FaHandPointDown className="fill-primary-color" size={32} />
        </div>
      )}
      <div>
        <div className="flex flex-col gap-8 relative py-8">
          <h1 className="text-secondary-dark-theme-color dark:text-white lg:text-5xl md:text-4xl sm:text-3xl text-5xl">
            {language.HERO_GREETINGS}
            <br />
            Fabricio Porras
          </h1>
          <h2 className="text-primary-color lg:text-4xl md:text-3xl sm:text-2xl text-4xl font-medium">
            Software Developer
          </h2>
          <div className="absolute bottom-0 right-0 -rotate-12 ">
            {isOpenToWork ? (
              <p className="flex gap-1 items-center text-bg-dark-theme dark:text-dark-text-paragraph-color pulsation-scale">
                <span className="w-3 ">
                  <GoDotFill className="fill-green-500" />
                </span>
                {language.HERO_OPEN_TO_WORK}
              </p>
            ) : (
              <p className="flex gap-1 items-center text-bg-dark-theme dark:text-dark-text-paragraph-color pulsation-scale">
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
            text={language.HERO_RESUME}
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
          <img className="rounded-xl border-2 dark:border-slate-800 shadow-lg dark:shadow-slate-600 shadow-slate-800" src={bgHero} alt="hero background" />
        </figure>
        <span className="text-primary-color font-medium text-sm md:text-lg lg:text-xl">
          {language.HERO_IMAGE_BOTTON_TEXT}
        </span>
      </div>
    </section>
  );
}

export default Hero;
