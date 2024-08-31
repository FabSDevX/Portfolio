import { useLanguage } from "../hook/useContext";
import { IoMdContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BiLogoLinkedin } from "react-icons/bi";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import HeroButton from "../component/HeroButton";

function Contact() {
    const { language } = useLanguage();
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formValues)
    }

    return (
        <section id="contact" className="flex mt-9 flex-col font-semibold fade-in-up px-4 gap-5 lg:px-0">
            <h2 className="w-fit relative text-4xl text-bg-dark-theme dark:text-white"><IoMdContact size={19} className="absolute bottom-1 left-6 dark:fill-gray-200 text-bg-dark-themedark:text-white" /> {language.CONTACT_TITLE}</h2>
            <div className="flex flex-col-reverse sm:flex-row gap-7">
                <div className=" sm:mt-0s sm:w-3/4 md:w-1/2">
                    <h3 className="mb-2 text-xl">{language.CONTACT_SEND_ME_MESSAGE}</h3>
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <TextField
                            className="dark:bg-dark-text-paragraph-color rounded-md"
                            type="text"
                            id="filled-basic"
                            name="name"
                            variant="filled"
                            autoComplete="off"
                            required
                            label={language.CONTACT_FORM_NAME}
                            value={formValues.name}
                            onChange={handleChange}
                        />
                        <TextField
                            className="dark:bg-dark-text-paragraph-color rounded-md"
                            id="filled-basic"
                            variant="filled"
                            name="email"
                            type="email"
                            autoComplete="off"
                            label={language.CONTACT_FORM_EMAIL}
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <TextField
                            className="dark:bg-dark-text-paragraph-color rounded-md"
                            id="filled-textarea"
                            variant="filled"
                            required
                            type="text"
                            name="comment"
                            autoComplete="off"
                            label={language.CONTACT_FORM_COMMENT}
                            multiline
                            minRows={4}
                            value={formValues.comment}
                            onChange={handleChange}
                        />
                        <button className="dark:text-gray-800 w-1/2 mx-auto dark:bg-dark-text-paragraph-color" type="submit">
                            {language.CONTACT_FORM_SEND}
                        </button>
                    </form>
                </div>
                <div className="flex flex-col">
                    <h3 className="mb-2 text-xl">{language.CONTACT_PERSONAL_INFORMATION}</h3>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-wrap gap-10">
                            <HeroButton Icon={FaPhoneAlt} text={"+506 83719375"} isHiddenText={false} action={"https://wa.me/50683719375"} />
                            <HeroButton Icon={MdEmail} text={"faporras05@gmail.com"} isHiddenText={false} action={"mailto:faporras05@gmail.com"} />
                        </div>
                        <div className="flex gap-10 flex-wrap lg:justify-center">
                            <HeroButton Icon={IoDocumentTextSharp} text={"Resume"} action={"https://drive.google.com/file/d/1U4r5vf6stAyl_5dStgQKkhUlfIfvjRcF/view?usp=sharing"} isHiddenText={false} />
                            <HeroButton Icon={BiLogoLinkedin} text={"LinkedIn"} action={"https://www.linkedin.com/in/fabricioporras/"} isHiddenText={false} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
