import {
  FaAws,
  FaEnvelope,
  FaFigma,
  FaLinkedin,
  FaReact,
  FaYoutube,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row items-start justify-between px-4 md:px-28 py-20">
      <div className="w-full md:w-1/2">
        <h1 className="text-5xl font-bold text-[#cdd7ee]">Pradip Puri</h1>
        <h2 className="text-2xl pt-3 font-semibold text-[#cdd7ee]">Frontend Engineer</h2>
        <p className="pt-3 text-[#a5b2c6]">I build things for the web.</p>

        <div className="pt-16 flex flex-col text-[#a5b2c6]">
          <span className="text-lg">Specializing</span>
          <span className="pt-3 hover:text-[#cdd7ee]">Web Development</span>
          <span className="pt-2 hover:text-[#cdd7ee]">
            Digital Marketing & SEO
          </span>
        </div>

        <div className="pt-10 text-3xl flex gap-5 text-[#a5b2c6]">
          <FaFigma />
          <FaReact />
          <RiTailwindCssFill />
          <DiMongodb />
          <FaGitAlt />
          <FaAws />
          <RiNextjsFill />
          <FaNodeJs />
        </div>

        <div className="pt-16 text-xl flex gap-5 text-[#a5b2c6]">
          <Link href={"purip586@gmail.com"} className="hover:text-[#cdd7ee]">
            <FaEnvelope />
          </Link>
          <Link href={"purip586@gmail.com"} className="hover:text-[#cdd7ee]">
            <FaLinkedin />
          </Link>
          <Link href={"purip586@gmail.com"} className="hover:text-[#cdd7ee]">
            <FaYoutube />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 pt-16 md:pt-0">
        <p>
          I enjoy creating things that will take place on the internet. My
          interest in web development started back in 2020 when I decided to try
          creating custom website for my own Company.
        </p>
        <p className="pt-8">
          I am a Creative IT professional with passion for creating web-based
          solutions, looking forward to develop my career in frontend development and Digital Marketing. Currently, I'm Focusing On developing web based
          services and User Interfaces at Cross You Co. Ltd.
        </p>
      </div>
    </div>
  );
}
