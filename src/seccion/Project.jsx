import { FaFolder } from "react-icons/fa";
import { useLanguage } from "../hook/useContext";
import { useEffect, useState } from "react";
import { getProjectById } from "../services/firebase/firebaseFuntions";
import ProjectCard from "../component/ProjectCard";

function Project() {
  const { language } = useLanguage();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const documents = await getProjectById("projects",`general-${language.LANGUAGE_CODE}`);
        setProjects(documents['project']);
      } catch (error) {
        const documents = await getProjectById("projects","general-en");
        setProjects(documents['project']);
        console.error("using default language in projects", error);
      }
    };
    fetchData();
  }, [language]);

  const title = language.PROJECTS_TITLE;

  return (
    <section
      id="projects"
      className="flex flex-col mt-16 font-semibold fade-in-up px-4 gap-5 lg:px-0"
    >
      <h2 className="flex items-center gap-x-2 text-4xl text-secondary-dark-theme-color dark:text-white">
        <FaFolder /> {title}
      </h2>
      <div className="flex mt-4 flex-col gap-9">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            isWorking={project.isWorking}
            img={project.img}
            github={project.github}
            preview={project.preview}
          />
        ))}
      </div>
    </section>
  );
}

export default Project;
