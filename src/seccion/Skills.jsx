import { GiSkills } from "react-icons/gi";
import { SKILLS } from "../util/skills";
import SkillsComponent from "../component/SkillsComponent";
function Skills() {
    return (
        <section id="skills" className="flex mt-16 flex-col font-semibold fade-in-up px-4 gap-5 lg:px-0">
            <h2 className="dark:text-white text-secondary-dark-theme-color flex items-center gap-x-2 text-4xl"><GiSkills /> Skills</h2>
            <div className="grid mt-5 gap-y-11 gap-x-7 sm:gap-x-14 lg:gap-x-20 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                {SKILLS.map((item, index) =>
                    <SkillsComponent key={index} SvgIcon={item[0]} title={item[1]} colorHover={item[2]} />
                )}
            </div>
        </section>
    );
}

export default Skills;
