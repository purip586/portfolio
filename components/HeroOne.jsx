import { FaAws, FaEnvelope, FaLinkedin, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import Link from "next/link";

const HeroOne = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-[#cdd7ee]">Pradip Puri</h1>
      <h2 className="text-2xl pt-3 font-semibold text-[#cdd7ee]">
        Frontend Engineer
      </h2>
      <p className="pt-3 text-[#a5b2c6]">I build things for the web.</p>

      <div className="pt-16 flex flex-col text-[#a5b2c6] hover:text-[#cdd7ee]">
        <span className="text-3xl opacity-50">Specializing</span>

        <div className="pt-5 flex items-center gap-3">
          <div className="w-14 h-[1px] bg-[#cdd7ee]"></div>
          <span>Web Development</span>
        </div>

        <div className="pt-3 flex items-center gap-3">
          <div className="w-14 h-[1px] bg-[#cdd7ee]"></div>
          <span>DevOps</span>
        </div>
      </div>

      <div className="pt-10 text-3xl flex gap-5 text-[#a5b2c6]">
        <FaReact />
        <RiTailwindCssFill />
        <FaGitAlt />
        <RiNextjsFill />
        <FaNodeJs />
        <SiMongodb />
        <FaAws />
      </div>

      <div className="pt-16 text-xl flex gap-5 text-[#a5b2c6]">
        <Link
          href={"mailto:purip586@gmail.com"}
          className="hover:text-[#cdd7ee]"
        >
          <FaEnvelope />
        </Link>
        <Link
          href={"https://www.linkedin.com"}
          className="hover:text-[#cdd7ee]"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default HeroOne;
