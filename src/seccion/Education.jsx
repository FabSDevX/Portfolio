import { useEffect, useState } from "react";
import { useLanguage } from "../hook/useContext";
import { FaGraduationCap } from "react-icons/fa";
import { getDocumentById } from "../services/firebase/firebaseFuntions";
import EducationCard from "../component/EducationCard";

function Education() {
    const { language } = useLanguage();
    const [isFetch, setIsFetch] = useState(false);
    const [university, setUniversity] = useState({});
    const [certification, setCertification] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const documentEducation = await getDocumentById('education', 'general');
                setUniversity(documentEducation.university);
                setCertification(documentEducation.certification);
                setIsFetch(true);
            } catch (error) {
                console.error("Error fetching education data ", error);
            }
        }
        fetchData();
    }, [])

    return (
        <section id="education" className="flex mt-16 flex-col font-semibold fade-in-up px-4 gap-5 lg:px-0">
            <h2 className="w-fit pt-2.5 relative text-4xl text-secondary-dark-theme-color dark:text-white"><FaGraduationCap size={28} className="absolute top-0 right-8 rotate-12 dark:fill-gray-200 text-bg-dark-themedark:text-white" /> {language.EDUCATION_TITLE}</h2>
            {isFetch && (<div>
                <div>
                    <h3 className="text-secondary-dark-theme-color dark:text-white text-3xl my-4 font-semibold">{language.EDUCATION_UNIVERSITY}</h3>
                    <EducationCard formation={university} />
                </div>
                <div>
                    <h3 className="text-secondary-dark-theme-color dark:text-white text-3xl my-4 font-semibold">{language.EDUCATION_CERTIFICATION}</h3>
                    <EducationCard formation={certification} />
                </div>
            </div>)}
        </section>
    );
}

export default Education;
