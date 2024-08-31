import PropTypes from "prop-types";
import { useLanguage } from "../hook/useContext";

function EducationCard({ formation }) {
    const { language } = useLanguage();
    return (
        <div>
            {
                formation.map((item, index) => (
                    <div key={index}>
                        <div className="flex flex-col-reverse sm:flex-row sm:justify-between">
                            <h4 className="text-primary-color font-bold">{item.title}</h4>
                            <p className="dark:text-white text-secondary-dark-theme-color text-center sm:text-end">{item.date}</p>
                        </div>
                        <h5 className="font-semibold dark:text-white text-secondary-dark-theme-color">{item.subtitle}</h5>
                        <div className="mt-2 flex flex-col gap-y-2">
                            <p className="text-bg-dark-theme dark:text-dark-text-paragraph-color font-medium">{language.EDUCATION_CONCENTRATION} {item.concentration} </p>
                            {item.bulls && (
                                <ul className="text-slate-700 dark:text-dark-text-paragraph-color list-disc pl-5">
                                    {item.bulls.map((value, index) => (
                                        <li key={index}>{value}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

EducationCard.propTypes = {
    formation: PropTypes.array.isRequired
}

export default EducationCard;