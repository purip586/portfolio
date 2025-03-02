import {
  FaAws,
  FaEnvelope,
  FaLinkedin,
  FaPython,
  FaReact,
  FaRProject,
} from "react-icons/fa";
import { RiFileExcel2Line, RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiMysql, SiPowerbi, SiTableau } from "react-icons/si";
import Link from "next/link";

const HeroOne = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Pradip Puri</h1>
      <h2 className="text-2xl pt-3 font-semibold">Data Engineer</h2>
      <p className="pt-3">I work with big data</p>

      <div className="pt-16 flex flex-col">
        <span className="text-3xl opacity-50">Specializing</span>

        <div className="pt-5 flex items-center gap-3">
          <div className="w-14 h-[1px] bg-[#1d1f20]"></div>
          <span>Web Development</span>
        </div>

        <div className="pt-3 flex items-center gap-3">
          <div className="w-14 h-[1px] bg-[#1d1f20]"></div>
          <span>Data Analysis</span>
        </div>
      </div>

      <div className="pt-10 w-full md:w-1/2 text-3xl flex flex-wrap gap-5 text-[#1d1f20]">
        <FaReact />
        <RiTailwindCssFill />
        <FaGitAlt />
        <RiNextjsFill />
        <FaNodeJs />
        <SiMongodb />
        <FaAws />
        <FaPython />
        <SiMysql />
        <SiPowerbi />
        <FaRProject />
        <SiTableau />
        <RiFileExcel2Line />
      </div>

      <div className="pt-16 text-xl flex gap-5">
        <Link
          href={"mailto:purip586@gmail.com"}
          className="hover:text-[#1d1f20]"
        >
          <FaEnvelope />
        </Link>
        <Link
          href={"https://www.linkedin.com"}
          className="hover:text-[#1d1f20]"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default HeroOne;
