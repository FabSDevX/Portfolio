import { useLanguage } from "../hook/useContext";

function Footer() {
    const { language } = useLanguage();

    return (
        <div className="flex flex-col justify-center relative left-0 bottom-0 w-full
            h-20 pt-2 mt-8">
            <div className="absolute top-0 w-full h-full -z-10 blur-md dark:bg-bg-dark-theme bg-slate-100"></div>
            <p className="text-center opacity-90 text-secondary-dark-theme-color dark:text-dark-text-paragraph-color">{language.FOOTER_COPYRIGHT}</p>
            <p className="text-center opacity-90 text-primary-color">{language.FOOTER_PHRASE}</p>
        </div>
    )
}
export default Footer;