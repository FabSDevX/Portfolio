import { FaPerson } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { MdContactMail } from "react-icons/md";

const map = {
  person: <FaPerson size={24} color="white" />,
  project: <FaFolder size={24} color="white" />,
  skill: <GiSkills size={24} color="white" />,
  education: <IoSchool size={24} color="white" />,
  contact: <MdContactMail size={24} color="white" />,
};

function getNavbarIcon(code) {
  try {
    return map[code];
  } catch (error) {
    console.error("Icon", error);
  }
}

export default getNavbarIcon;
