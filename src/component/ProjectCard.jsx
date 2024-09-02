import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useLanguage } from "../hook/useContext";
import { getImageByUrl } from "../services/firebase/firebaseFuntions";
import { useEffect, useState } from "react";
import noBackgroundImg from "../assets/no-background.webp";
import PropTypes from "prop-types";
import HeroButton from "./HeroButton";
function ProjectCard({
  title,
  description,
  tags,
  img,
  isWorking = true,
  github,
  preview,
}) {
  const [imageSrc, setImageSrc] = useState(noBackgroundImg);
  const { language } = useLanguage();

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await getImageByUrl(img);
        setImageSrc(url);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImage();
  }, [img]);
  return (
    <div className="md:flex gap-8 items-center">
      <figure className="w-11/12 max-h-72 flex border-2 border-gray-700 dark:border-gray-200 bg-slate-700 dark:bg-white rounded-xl">
        <img className="rounded-xl" src={imageSrc} alt="Project image" />
      </figure>
      <div className="w-11/12 flex flex-col">
        <div className="flex mt-3 sm:mt-0 flex-col gap-2 mb-8 sm:mb-2 md:mb-8">
          <h3 className="text-secondary-dark-theme-color dark:text-white text-3xl sm:text-2xl md:text-3xl">
            {title}
          </h3>
          <ul className="flex flex-wrap gap-x-2 md:gap-x-3 gap-y-1">
            {tags.map((title, index) => (
              <li
                className="bg-secondary-dark-theme-color text-primary-color p-1 rounded-md"
                key={index}
              >
                {title}
              </li>
            ))}
          </ul>
          <p className="text-bg-dark-theme dark:text-dark-text-paragraph-color">
            {description}
          </p>
        </div>
        <div className="flex gap-1 md:gap-2 flex-wrap-reverse mt-auto">
          {github.isGithub && (
            <HeroButton
              Icon={FiGithub}
              text={"GitHub"}
              action={github.link}
              isHiddenText={false}
            />
          )}

          {preview.isPreview && (
            <HeroButton
              Icon={FaLink}
              text={language.PROJECTS_PREVIEW}
              action={preview.link}
              isHiddenText={false}
            />
          )}

          {isWorking ? (
            <p className="flex text-sm md:text-base gap-1 sm:ml-auto mr-3 items-center text-bg-dark-theme dark:text-dark-text-paragraph-color">
              <span className="w-3 ">
                <GoDotFill className="fill-primary-color" />
              </span>
              {language.PROJECTS_WORKING}
            </p>
          ) : (
            <p className="flex text-sm md:text-base gap-1 sm:ml-auto mr-3 items-center text-bg-dark-theme dark:text-dark-text-paragraph-color">
              <span className="w-3 ">
                <GoDotFill className="fill-green-500" />
              </span>
              {language.PROJECTS_DEPLOYED}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
  isWorking: PropTypes.bool.isRequired,
  github: PropTypes.object.isRequired,
  preview: PropTypes.object.isRequired,
};

export default ProjectCard;
