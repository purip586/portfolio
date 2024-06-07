import { FaAws, FaEnvelope, FaFigma, FaLinkedin, FaReact, FaYoutube } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-between p-24">
     <div className="w-full md:w-1/2">
      <h1 className="text-5xl font-bold">Pradip Puri</h1>
      <h2 className="text-2xl pt-3 font-semibold">Frontend Engineer</h2>
      <p className="pt-3 text-[#a5b2c6]">I build things for the web.</p>

      <div className="pt-16 flex flex-col text-[#a5b2c6]">
        <span className="text-lg">Specializing</span>
        <span className="pt-3 hover:text-[#cdd7ee]">Web Development</span>
        <span className="pt-2 hover:text-[#cdd7ee]">Digital Marketing & SEO</span>
      </div>

      <div className="pt-10 text-xl flex gap-5 text-[#a5b2c6]">
        <Link href={"purip586@gmail.com"} className="hover:text-[#cdd7ee]"><FaEnvelope /></Link>
        <Link href={"purip586@gmail.com"} className="hover:text-[#cdd7ee]"><FaLinkedin /></Link>
        <Link href={"purip586@gmail.com"} className="hover:text-[#cdd7ee]"><FaYoutube /></Link>
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
      
     </div>
    </div>
  );
}
