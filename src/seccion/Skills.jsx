import { GiSkills } from "react-icons/gi";
import { SKILLS } from "../util/skills";
import SkillsComponent from "../component/SkillsComponent";
function Skills() {
    return (
        <section id="skills" className="flex mt-16 flex-col font-semibold fade-in-up px-4 gap-5 lg:px-0">
            <h2 className="dark:text-white text-secondary-dark-theme-color flex items-center gap-x-2 text-4xl"><GiSkills /> Skills</h2>
            <div className="flex mt-5 center gap-y-11 gap-x-14 sm:gap-x-24 flex-wrap">
                {SKILLS.map((item, index) =>
                    <SkillsComponent key={index} SvgIcon={item[0]} title={item[1]} colorHover={item[2]} />
                )}
            </div>
        </section>
    );
}

export default Skills;
