import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  return (
    <div className="pt-28">
      <h2 className="text-lg">My Featured Projects</h2>
      <Link href="https://xurealty-japan.com" passHref target="_blank">
        <div className="relative px-5 py-8 mt-16 flex flex-col md:flex-row gap-3 cursor-pointer transition-transform hover:scale-105 duration-300 transform bg-opacity-5 backdrop-blur-md bg-white">
          <div>
            <Image
              src="/crossyou.jpg"
              width={200}
              height={100}
              alt="CrossYou Real Estate Web App"
            />
          </div>
          <div>
            <div className="flex gap-2">
              <p className="text-[#cdd7ee]">A Real Estate Web App</p>
              <GoArrowUpRight />
            </div>
            <p className="pt-2 text-sm">
              Web app with property listing and management features.
            </p>
            <div className="flex gap-3 pt-3 text-xs">
              <span className="bg-[#5ce4cf] bg-opacity-20 text-[#5ce4cf] p-1 rounded-md">
                NEXT
              </span>
              <span className="bg-[#5ce4cf] bg-opacity-20 text-[#5ce4cf] p-1 rounded-md">
                Tailwind
              </span>
              <span className="bg-[#5ce4cf] bg-opacity-20 text-[#5ce4cf] p-1 rounded-md">
                MongoDB
              </span>
              <span className="bg-[#5ce4cf] bg-opacity-20 text-[#5ce4cf] p-1 rounded-md">
                AWS
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
