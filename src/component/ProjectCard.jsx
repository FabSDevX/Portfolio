import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useLanguage } from "../hook/useContext";
import { getImageByUrl } from "../services/firebase/firebaseFuntions";
import { useEffect, useState } from "react";
import noBackgroundImg from "../assets/no-background.webp";
import PropTypes from 'prop-types';
import HeroButton from "./HeroButton";
function ProjectCard({ title, description, tags, img, isWorking = true, github, preview }) {
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
        <div className="sm:flex gap-8">
            <figure className="w-11/12 max-h-72 flex bg-white rounded-xl">
                <img className="rounded-xl" src={imageSrc} alt="Project image" />
            </figure>
            <div className="w-11/12">
                <div className="flex mt-3 sm:mt-0 flex-col gap-3 mb-8">
                    <h3 className="text-3xl sm:text-2xl md:text-3xl">{title}</h3>
                    <ul className="flex flex-wrap gap-3">
                        {tags.map((title, index) => (
                            <li className="dark:bg-secondary-dark-theme-color dark:text-primary-color p-1 rounded-md" key={index}>{title}</li>
                        ))}
                    </ul>
                    <p className="dark:text-dark-text-paragraph-color">
                        {description}
                    </p>
                </div>
                <div className="flex gap-5 sm:gap-1 md:gap-5 flex-wrap-reverse">
                    {github.isGithub && (<HeroButton
                        Icon={FiGithub}
                        text={"GitHub"}
                        action={github.link}
                        isHiddenText={false}
                    />)}

                    {preview.isPreview && (<HeroButton
                        Icon={FaLink}
                        text={language.PROJECTS_TITLE}
                        action={preview.link}
                        isHiddenText={false}
                    />)}

                    {isWorking ? (
                        <p className="flex gap-1 items-center dark:text-dark-text-paragraph-color">
                            <span className="w-3 ">
                                <GoDotFill className="fill-primary-color" />
                            </span>
                            {language.PROJECTS_WORKING}
                        </p>
                    ) : (
                        <p className="flex gap-1 items-center dark:text-dark-text-paragraph-color">
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
    preview: PropTypes.object.isRequired
}

export default ProjectCard;