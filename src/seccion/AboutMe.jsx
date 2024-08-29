import { useLanguage } from "../hook/useContext";

function AboutMe() {
  const { language } = useLanguage();
  return (
    <section id="about-me" className="flex min-h-screen relative items-center justify-between text-red-400 dark:text-white font-semibold fade-in-up px-4 gap-5 lg:px-0">
      <p>ss</p>
    </section>
  );
}

export default AboutMe;
