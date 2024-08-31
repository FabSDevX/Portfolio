import { IoPerson } from "react-icons/io5";
import { useLanguage } from "../hook/useContext";
import profile from "../assets/profile.webp"

function AboutMe() {
  const { language } = useLanguage();
  const title = language.ABOUT_ME_TITLE;
  const p1 = language.ABOUT_ME_PARAGRAPH_1;
  const p2 = language.ABOUT_ME_PARAGRAPH_2;
  const p3 = language.ABOUT_ME_PARAGRAPH_3;

  return (
    <section id="about-me" className="flex flex-col min-h-screen relative text-secondary-dark-theme-color dark:text-white font-semibold fade-in-up px-4 gap-5 lg:px-0">
      <h2 className="flex gap-x-2 
      text-4xl"><IoPerson /> {title}</h2>
      <div className="flex flex-col-reverse sm:flex-row gap-x-6">

        <div className="flex flex-col sm:w-9/12 gap-5 sm:text-lg md:text-xl text-bg-dark-theme dark:text-dark-text-paragraph-color">
          <p className="break-words">
            {p1.map((item, index) =>
              item.highlight ? (
                <span key={index} className="text-primary-color">{item.text}</span>
              ) : (
                item.text
              )
            )}
          </p>
          <p>{p2.map((item, index) =>
            item.highlight ? (
              <span key={index} className="text-primary-color">{item.text}</span>
            ) : (
              item.text
            )
          )}</p>
          <p>{p3.map((item, index) =>
            item.highlight ? (
              <span key={index} className="text-primary-color">{item.text}</span>
            ) : (
              item.text
            )
          )}</p>
        </div>
        <div className="flex my-auto mb-6 sm:mb-auto sm:ml-auto sm:mr-0 w-56 h-56 border-8 border-slate-800 rounded-lg sm:rotate-6">
          <img src={profile} alt="User image" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
